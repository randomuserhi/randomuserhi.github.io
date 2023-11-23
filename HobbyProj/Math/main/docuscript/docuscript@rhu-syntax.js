RHU.module(new Error(), "docuscript", {
    codeblock: "docuscript/components/molecules/codeblock",
    style: "docuscript/style"
}, function ({ codeblock, style }) {
    const mountChildren = (context, node, children, conversion) => {
        for (let child of children) {
            let childNode;
            if (typeof child === "string") {
                childNode = conversion(child);
            }
            else {
                childNode = child;
            }
            context.remount(childNode, node);
        }
    };
    const mountChildrenText = (context, node, children) => {
        mountChildren(context, node, children, (text) => context.nodes.text(text));
    };
    const mountChildrenP = (context, node, children) => {
        mountChildren(context, node, children, (text) => context.nodes.p(text));
    };
    return {
        center: {
            create: function (...children) {
                let node = {
                    __type__: "center"
                };
                mountChildrenText(this, node, children);
                return node;
            },
            parse: function (children) {
                let dom = document.createElement("div");
                dom.classList.toggle(`${style.center}`, true);
                dom.append(...children);
                return dom;
            }
        },
        ot: {
            create: function (options, headings, ...objects) {
                let node = {
                    __type__: "table",
                    widths: options.widths
                };
                const { td, tr, b, i } = this.nodes;
                if (options.headings) {
                    this.remount(tr(...options.headings.map(h => td(b(i(h))))), node);
                }
                for (const obj of objects) {
                    this.remount(tr(...headings.map(h => {
                        if (typeof h === "string") {
                            return td(obj[h] === undefined ? options.default ? options.default : obj[h] : obj[h]);
                        }
                        else {
                            return td(h(obj));
                        }
                    })), node);
                }
                return node;
            },
        },
        t: {
            create: function (widths, ...content) {
                let node = {
                    __type__: "table",
                    widths
                };
                const { td, tr } = this.nodes;
                for (const row of content) {
                    this.remount(tr(...row.map(r => td(r))), node);
                }
                return node;
            },
        },
        table: {
            create: function (widths, ...children) {
                let node = {
                    __type__: "table",
                    widths
                };
                mountChildrenText(this, node, children);
                return node;
            },
            parse: function (children, node) {
                for (const row of children) {
                    if (node.widths) {
                        for (let i = 0; i < node.widths.length && i < row.childNodes.length; ++i) {
                            row.childNodes[i].style.width = node.widths[i];
                        }
                    }
                }
                let wrapper = document.createElement("table");
                if (node.widths) {
                    wrapper.classList.toggle(`${style.block}`, true);
                }
                let dom = document.createElement("tbody");
                dom.append(...children);
                wrapper.append(dom);
                return wrapper;
            }
        },
        tr: {
            create: function (...children) {
                let node = {
                    __type__: "tr"
                };
                mountChildrenText(this, node, children);
                return node;
            },
            parse: function (children) {
                let dom = document.createElement("tr");
                dom.append(...children);
                return dom;
            }
        },
        td: {
            create: function (...children) {
                let node = {
                    __type__: "td"
                };
                mountChildrenText(this, node, children);
                return node;
            },
            parse: function (children) {
                let dom = document.createElement("td");
                dom.append(...children);
                return dom;
            }
        },
        i: {
            create: function (...children) {
                let node = {
                    __type__: "i",
                };
                mountChildrenText(this, node, children);
                return node;
            },
            parse: function (children) {
                let dom = document.createElement("i");
                dom.append(...children);
                return dom;
            }
        },
        b: {
            create: function (...children) {
                let node = {
                    __type__: "b",
                };
                mountChildrenText(this, node, children);
                return node;
            },
            parse: function (children) {
                let dom = document.createElement("b");
                dom.append(...children);
                return dom;
            }
        },
        desmos: {
            create: function (src) {
                let node = {
                    __type__: "desmos",
                    src
                };
                return node;
            },
            parse: function (_, node) {
                const dom = document.createElement("iframe");
                dom.classList.toggle(`${style.desmos}`, true);
                dom.src = `https://www.desmos.com/${node.src}?embed`;
                return dom;
            }
        },
        ul: {
            create: function (...children) {
                let node = {
                    __type__: "ul",
                };
                mountChildrenText(this, node, children);
                return node;
            },
            parse: function (children) {
                const dom = document.createElement("ul");
                dom.classList.toggle(`${style.block}`, true);
                for (const child of children) {
                    const li = document.createElement("li");
                    li.classList.toggle(`${style.block}`, true);
                    const wrapper = document.createElement("div");
                    wrapper.classList.toggle(`${style.block}`, true);
                    wrapper.append(child);
                    li.append(wrapper);
                    dom.append(li);
                }
                return dom;
            }
        },
        ol: {
            create: function (...children) {
                let node = {
                    __type__: "ol",
                };
                mountChildrenText(this, node, children);
                return node;
            },
            parse: function (children) {
                const dom = document.createElement("ol");
                dom.classList.toggle(`${style.block}`, true);
                for (const child of children) {
                    const li = document.createElement("li");
                    li.classList.toggle(`${style.block}`, true);
                    const wrapper = document.createElement("div");
                    wrapper.classList.toggle(`${style.block}`, true);
                    wrapper.append(child);
                    li.append(wrapper);
                    dom.append(li);
                }
                return dom;
            }
        },
        mj: {
            create: function (...children) {
                let node = {
                    __type__: "mj",
                };
                mountChildrenText(this, node, children);
                return node;
            },
            parse: function (children) {
                const dom = document.createElement("span");
                dom.append(...children);
                MathJax.Hub.Queue(["Typeset", MathJax.Hub, dom]);
                return dom;
            }
        },
        link: {
            create: function (href, ...children) {
                let node = {
                    __type__: "link",
                    href,
                };
                mountChildrenText(this, node, children);
                return node;
            },
            parse: function (children, node) {
                const dom = document.createElement("a");
                dom.target = "blank";
                dom.href = node.href;
                dom.append(...children);
                return dom;
            }
        },
        icode: {
            create: function ([language], ...children) {
                let node = {
                    __type__: "icode",
                    language,
                };
                mountChildrenText(this, node, children);
                return node;
            },
            parse: function (children, node) {
                const dom = document.createElement("span");
                dom.classList.toggle(`${style.inlineCode}`, true);
                dom.append(...children);
                if (node.language) {
                    dom.classList.toggle(node.language, true);
                }
                else {
                    dom.classList.toggle("language-plaintext", true);
                }
                hljs.highlightElement(dom);
                return dom;
            },
        },
        code: {
            create: function ([language], ...children) {
                let node = {
                    __type__: "code",
                    language,
                };
                this.remount(this.nodes.text(children.join("\n")), node);
                return node;
            },
            parse: function (children, node) {
                const dom = document.createMacro(codeblock);
                dom.classList.toggle(`${style.block}`, true);
                dom.append(...children);
                dom.setLanguage(node.language);
                return dom;
            },
        },
        pl: {
            create: function ([path, index], ...children) {
                let node = {
                    __type__: "pl",
                    path,
                    index,
                };
                mountChildrenText(this, node, children);
                return node;
            },
            parse: function (children, node) {
                const pl = node;
                const dom = document.createElement(`a`);
                dom.style.textDecoration = "inherit";
                if (pl.link) {
                    dom.href = pl.link;
                    dom.addEventListener("click", (e) => {
                        e.preventDefault();
                        if (pl.onclick) {
                            pl.onclick();
                        }
                    });
                }
                dom.append(...children);
                return dom;
            }
        },
        img: {
            create: function (src, width) {
                return {
                    __type__: "img",
                    src,
                    width
                };
            },
            parse: function (_, node) {
                let img = document.createElement("img");
                img.src = node.src;
                if (node.width) {
                    img.style.width = node.width;
                }
                return img;
            }
        },
        text: {
            create: function (text) {
                return {
                    __type__: "text",
                    text: text.toString(),
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
            parse: function () {
                let dom = document.createElement("br");
                return dom;
            }
        },
        p: {
            create: function (...children) {
                let node = {
                    __type__: "p",
                };
                mountChildrenText(this, node, children);
                return node;
            },
            parse: function (children) {
                let dom = document.createElement("p");
                dom.classList.toggle(`${style.block}`, true);
                dom.append(...children);
                return dom;
            }
        },
        h: {
            create: function (heading, label, ...children) {
                let node = {
                    __type__: "h",
                    heading,
                    label,
                };
                if (children.length === 0) {
                    this.remount(this.nodes.text(label), node);
                }
                else {
                    mountChildrenText(this, node, children);
                }
                return node;
            },
            parse: function (children, node) {
                const h = node;
                const dom = document.createElement(`h${h.heading}`);
                dom.style.display = "flex";
                dom.style.gap = "8px";
                dom.style.alignItems = "center";
                dom.classList.toggle(`${style.block}`, true);
                if (h.link) {
                    const wrapper = document.createElement("div");
                    wrapper.style.alignSelf = "stretch";
                    wrapper.style.flexShrink = "0";
                    wrapper.style.paddingTop = "0.8rem";
                    wrapper.style.display = "flex";
                    const link = document.createElement("a");
                    link.href = h.link;
                    link.innerHTML = "";
                    link.style.fontFamily = "docons";
                    link.style.fontSize = "1rem";
                    link.style.textDecoration = "inherit";
                    link.style.color = "inherit";
                    link.addEventListener("click", (e) => {
                        e.preventDefault();
                        if (h.onclick) {
                            h.onclick();
                        }
                    });
                    wrapper.append(link);
                    dom.append(wrapper);
                }
                dom.append(...children);
                return dom;
            }
        },
        div: {
            create: function (...children) {
                let node = {
                    __type__: "div",
                };
                mountChildrenP(this, node, children);
                return node;
            },
            parse: function (children) {
                let dom = document.createElement("div");
                dom.classList.toggle(`${style.block}`, true);
                dom.append(...children);
                return dom;
            }
        },
        frag: {
            create: function (...children) {
                let node = {
                    __type__: "frag",
                };
                mountChildrenText(this, node, children);
                return node;
            },
            parse: function (children) {
                let dom = new DocumentFragment();
                dom.append(...children);
                return dom;
            },
        },
    };
});
