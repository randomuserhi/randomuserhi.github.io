RHU.import(RHU.module({ trace: new Error(),
    name: "Grid", hard: ["RHU.Macro"],
    callback: function () {
        let { RHU } = window.RHU.require(window, this);
        let grid = function () {
            this.mount = this.parentElement;
            if (!RHU.exists(this.mount))
                throw new Error("No appmount was found.");
            this.addEventListener("click", () => {
                this.mount.panel.hide();
            });
            this.load();
        };
        grid.prototype.load = function () {
            let categories = new Map();
            for (let notif of notifications) {
                if (notif.categories.length === 0) {
                    if (!categories.has("Edge Case"))
                        categories.set("Edge Case", []);
                    categories.get("Edge Case").push(notif);
                    continue;
                }
                for (let cat of notif.categories) {
                    if (!categories.has(cat))
                        categories.set(cat, []);
                    categories.get(cat).push(notif);
                }
            }
            for (let kv of categories) {
                let cat = document.createMacro("category");
                cat.load(kv[0], kv[1]);
                this.body.append(cat);
            }
        };
        RHU.Macro(grid, "grid", `
            <div rhu-id="body">
            </div>
            `, {
            element: `<div></div>`
        });
    }
}));
