RHU.module(new Error(), "docuscript/components/molecules/codeblock", {
    Macro: "rhu/macro", style: "docuscript/components/molecules/codeblock/style",
}, function ({ Macro, style, }) {
    const codeblock = Macro((() => {
        const codeblock = function () {
        };
        codeblock.prototype.setLanguage = function (language) {
            if (language) {
                this.code.classList.toggle(language, true);
            }
            else {
                this.code.classList.toggle("language-plaintext", true);
            }
            hljs.highlightElement(this.code);
        };
        codeblock.prototype.append = function (...args) {
            return HTMLElement.prototype.append.call(this.code, ...args);
        };
        return codeblock;
    })(), "docuscript/molecules/codeblock", `
        <pre><code rhu-id="code"></code></pre>
        `, {
        element: `<div></div>`
    });
    return codeblock;
});
