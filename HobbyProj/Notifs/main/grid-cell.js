RHU.import(RHU.module({ trace: new Error(),
    name: "Cell", hard: ["RHU.Macro"],
    callback: function () {
        let { RHU } = window.RHU.require(window, this);
        let cell = function () {
        };
        cell.prototype.load = function (notif, category) {
            if (RHU.exists(notif.note)) {
                this.note.innerHTML = notif.note + "<br style='margin-top: 10px;'/>";
            }
            this.note.innerHTML +=
                `<a target="_blank" href="https://github.com/PolyAI-LDN/platform_ui/blob/62439139bcdce8cd5a5975e6a7abee507a6aafce/src/${notif.link}">${notif.link}</a>`;
            let json = {
                type: notif.type,
                status: notif.status,
            };
            if (RHU.exists(notif.entity_id)) {
                json.entity_id = notif.entity_id;
            }
            if (RHU.exists(notif.message)) {
                json.message = notif.message;
            }
            if (RHU.exists(notif.metadata)) {
                json.metadata = notif.metadata;
            }
            this.attr.innerHTML = JSON.stringify(json, null, 4)
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
            hljs.highlightElement(this.attr);
            let original = document.createMacro("notification");
            original.loadOriginal(notif);
            this.original.replaceChildren(original);
            let altered = document.createMacro("notification");
            altered.load(notif, category);
            this.altered.replaceChildren(altered);
        };
        RHU.Macro(cell, "cell", `
            <div class="cell-notifs">
                <div style="border-radius: 4px; font-size: 12px; background-color: #4286ce; color: white; border-radius: 4px; padding: 12px;" class="nohighlight" rhu-id="note"></div>
                <div class="divider">
                    <span>original</span>
                </div>
                <div rhu-id="original"></div>
                <div class="divider">
                    <span>new</span>
                </div>
                <div rhu-id="altered"></div>
                <pre><code style="border-radius: 4px" class="language-json" rhu-id="attr"></code></pre>
            </div>
            `, {
            element: `<div class="grid-cell"></div>`
        });
    }
}));
