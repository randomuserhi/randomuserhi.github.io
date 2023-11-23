(function () {
    let defaultParser = {
        text: {
            create: function (text) {
                return {
                    __type__: "text",
                    text: text,
                };
            },
            parse: function (_, node) {
                return document.createTextNode(node.text);
            }
        },
        br: {
            create: function () {
                return {
                    __type__: "br",
                };
            },
            parse: function (children) {
                let dom = document.createElement("br");
                dom.append(...children);
                return dom;
            }
        },
        p: {
            create: function (...children) {
                let node = {
                    __type__: "p",
                };
                for (let child of children) {
                    let childNode;
                    if (typeof child === "string") {
                        childNode = this.nodes.text(child);
                    }
                    else {
                        childNode = child;
                    }
                    this.remount(childNode, node);
                }
                return node;
            },
            parse: function (children) {
                let dom = document.createElement("p");
                dom.append(...children);
                return dom;
            }
        },
        h: {
            create: function (heading, ...children) {
                let node = {
                    __type__: "h",
                    heading: heading,
                };
                for (let child of children) {
                    let childNode;
                    if (typeof child === "string") {
                        childNode = this.nodes.text(child);
                    }
                    else {
                        childNode = child;
                    }
                    this.remount(childNode, node);
                }
                return node;
            },
            parse: function (children, node) {
                let dom = document.createElement(`h${node.heading}`);
                dom.append(...children);
                return dom;
            }
        },
        block: {
            create: function (...children) {
                let node = {
                    __type__: "block",
                };
                for (let child of children) {
                    let childNode;
                    if (typeof child === "string") {
                        childNode = this.nodes.p(child);
                    }
                    else {
                        childNode = child;
                    }
                    this.remount(childNode, node);
                }
                return node;
            },
            parse: function (children) {
                let dom = document.createElement("div");
                dom.append(...children);
                return dom;
            }
        },
    };
    let docuscript = window.docuscript = function (generator, parser = defaultParser) {
        return {
            parser,
            generator
        };
    };
    docuscript.parse = function (page) {
        let content = [];
        const nodes = {};
        const context = {};
        for (const [node, func] of Object.entries(page.parser)) {
            nodes[node] = (...args) => func.create.call(docuscriptContext, ...args);
            context[node] = (...args) => {
                const node = func.create.call(docuscriptContext, ...args);
                content.push(node);
                return node;
            };
        }
        const docuscriptContext = {
            nodes,
            remount: (child, parent) => {
                if (child.__parent__ && child.__parent__.__children__) {
                    child.__parent__.__children__ = child.__parent__.__children__.filter(n => n !== child);
                }
                else {
                    content = content.filter(n => n !== child);
                }
                child.__parent__ = parent;
                if (parent.__children__) {
                    parent.__children__.push(child);
                }
                else {
                    parent.__children__ = [child];
                }
            }
        };
        page.generator(context);
        return content;
    };
    docuscript.render = function (page, patch) {
        const fragment = new DocumentFragment();
        const parser = page.parser;
        const destructors = [];
        let content = docuscript.parse(page);
        let stack = [];
        let walk = (node) => {
            let wrapper = [];
            let parent = stack.length === 0 ? undefined : stack[stack.length - 1];
            stack.push(wrapper);
            if (node.__children__) {
                for (let child of node.__children__) {
                    walk(child);
                }
            }
            if (patch && patch.pre) {
                patch.pre(node);
            }
            if (parser[node.__type__].parse === undefined)
                throw new Error(`No parser exists for node of type: ${node.__type__}.`);
            let result = parser[node.__type__].parse(wrapper, node);
            let data = undefined;
            let dom;
            if (Array.isArray(result)) {
                dom = result[0];
                data = result[1];
            }
            else {
                dom = result;
            }
            if (parser[node.__type__].destructor) {
                destructors.push(() => {
                    parser[node.__type__].destructor(data);
                });
            }
            if (patch && patch.post) {
                patch.post(node, dom);
            }
            if (parent) {
                parent.push(dom);
            }
            else {
                fragment.append(dom);
            }
            stack.pop();
        };
        for (let node of content) {
            walk(node);
        }
        return [fragment, () => {
                for (const destructor of destructors) {
                    destructor();
                }
            }];
    };
    docuscript.defaultParser = defaultParser;
})();
