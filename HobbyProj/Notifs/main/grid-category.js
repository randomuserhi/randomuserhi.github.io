RHU.import(RHU.module({ trace: new Error(),
    name: "Category", hard: ["RHU.Macro"],
    callback: function () {
        let { RHU } = window.RHU.require(window, this);
        let category = function () {
        };
        category.prototype.load = function (category, notifs) {
            this.title.innerHTML = category;
            for (let notif of notifs) {
                let cell = document.createMacro("cell");
                if (category != "Edge Case")
                    cell.load(notif, category);
                else
                    cell.load(notif);
                this.grid.append(cell);
            }
        };
        RHU.Macro(category, "category", `
            <h1 rhu-id="title"></h1>
            <div class="grid" rhu-id="grid">
            </div>
            `, {
            element: `<div class="grid-category"></div>`
        });
    }
}));
