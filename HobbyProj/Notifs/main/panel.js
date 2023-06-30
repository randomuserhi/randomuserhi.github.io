RHU.import(RHU.module({ trace: new Error(),
    name: "Panel", hard: ["RHU.Macro"],
    callback: function () {
        let { RHU } = window.RHU.require(window, this);
        let panel = function () {
            this.mount = this.parentElement;
            if (!RHU.exists(this.mount))
                throw new Error("No appmount was found.");
        };
        panel.prototype.hide = function () {
            this.style.display = "none";
        };
        panel.prototype.show = function () {
            this.style.display = "block";
        };
        RHU.Macro(panel, "panel", `
                Basic content
            `, {
            element: `<div class="panel"></div>`
        });
    }
}));
