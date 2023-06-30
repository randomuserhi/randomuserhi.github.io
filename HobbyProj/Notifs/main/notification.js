RHU.import(RHU.module({ trace: new Error(),
    name: "Notification", hard: ["RHU.Macro"],
    callback: function () {
        let { RHU } = window.RHU.require(window, this);
        const INFO_COLOR = "#467EE5";
        const ERROR_COLOR = "#fd5254";
        const WARNING_COLOR = "#ffc262";
        const SUCCESS_COLOR = "#09c590";
        let notification = function () {
        };
        notification.prototype.load = function (notif, category) {
            if (RHU.exists(category)) {
                let n = notifCategory[category](notif);
                if (RHU.exists(notif.message.title))
                    this.title.innerText = notif.message.title;
                else
                    this.title.innerHTML = n.title;
                if (RHU.exists(notif.message.body))
                    this.body.innerText = notif.message.body;
                else
                    this.body.innerHTML = n.body;
            }
            else {
                if (RHU.exists(notif.message.title))
                    this.title.innerText = notif.message.title;
                else
                    throw new Error("Edge case must have a title");
                if (RHU.exists(notif.message.body))
                    this.body.innerText = notif.message.body;
            }
            if (RHU.exists(notif.entity_id)) {
                for (let id of notif.entity_id) {
                    let el = document.createElement("u");
                    el.style.cursor = "pointer";
                    el.innerText = `${notif.entity_id}`;
                    this.entityIds.append(el);
                }
                this.entityIds.style.display = "block";
            }
            if (RHU.exists(notif.metadata)) {
                if (RHU.exists(notif.metadata.error_code)) {
                    this.errorCode.innerText = `Error Code: ${notif.metadata.error_code}`;
                    this.errorCode.style.display = "block";
                }
                if (RHU.exists(notif.metadata.call_to_action)) {
                    this.cta.querySelector("button").innerText = notif.metadata.call_to_action;
                    this.cta.style.display = "block";
                    if (this.body.innerHTML === "") {
                        this.cta.style.display = "flex";
                        this.cta.style.marginTop = "10px";
                    }
                }
            }
            this._load(notif);
        };
        notification.prototype.loadOriginal = function (notif) {
            this.title.innerHTML = notif.title;
            this.body.innerHTML = notif.body;
            this._load(notif);
        };
        notification.prototype._load = function (notif) {
            let color;
            switch (notif.status) {
                case "success":
                    color = SUCCESS_COLOR;
                    break;
                case "error":
                    color = ERROR_COLOR;
                    break;
                default:
                    color = INFO_COLOR;
                    break;
            }
            this.style.backgroundColor = color;
            if (this.body.innerHTML === "")
                this.body.style.display = "none";
        };
        RHU.Macro(notification, "notification", `
            <div style="display: flex; align-items: center;">
                <div style="display: contents;">
                    <svg class="notif-icon" viewBox="0 0 32 32" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 26c-5.523 0-10-4.477-10-10S10.477 6 16 6s10 4.477 10 10-4.477 10-10 10Zm0 2c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z"></path>
                        <path d="M17.25 11.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0ZM14 14a1 1 0 1 0 0 2h1v4h-2a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-5a1 1 0 0 0-1-1h-2Z"></path>
                    </svg>
                </div>
            </div>
            <div class="notif-wrapper">
                <p class="notif-title" rhu-id="title"></p>
                <p class="notif-body" rhu-id="body"></p>
                <p class="notif-entity-id" rhu-id="entityIds"></p>
                <p class="notif-error-code" rhu-id="errorCode"></p>
                <div class="notif-cta" rhu-id="cta">
                    <button class="notif-cta-btn"></button>
                </div>
            </div>
            `, {
            element: `<div class="notification"></div>`
        });
    }
}));
