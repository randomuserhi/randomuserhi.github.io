RHU.import(RHU.module({ trace: new Error(),
    name: "Main", hard: ["RHU.Macro"],
    callback: function () {
        let { RHU } = window.RHU.require(window, this);
        let appmount = function () {
        };
        RHU.Macro(appmount, "appmount", `
            <rhu-macro rhu-id="grid" rhu-type="grid"></rhu-macro>
            <rhu-macro rhu-id="panel" rhu-type="panel"></rhu-macro>
            `, {
            element: `<div class="appmount"></div>`
        });
    }
}));
