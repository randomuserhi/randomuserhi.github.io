import { html } from "rhu/html.js";
import { Style } from "rhu/style.js";
import { Theme } from "rhu/theme.js";

export const theme = Theme(({ theme }) => {
    return {
        defaultColor: theme`rgba(255, 255, 255, 0.8)`,
        fullWhite: theme`white`,
        fullBlack: theme`black`,
        hoverPrimary: theme`#2997ff`,
        backgroundPrimary: theme`#0071e3`,
        backgroundAccent: theme`#147ce5`,
    };
});

const style = Style(({ css }) => {
    const wrapper = css.class`
    font-family: roboto;

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    background-color: #fff;

    overflow: hidden;
    `;
    const body = css.class`
    flex: 1;
    `;

    return {
        wrapper,
        body
    };
});

const App = () => {
    /*private:*/
    interface _App {
        readonly body: HTMLDivElement;
    }
    /*public:*/
    interface App {
        
    }

    const dom = html<_App & App>/**//*html*/`
    <div class="${theme} ${style.wrapper}">
        <div m-id="body" class="${style.body}">
        </div>
    </div>
    `;
    html.box(dom);
    
    return dom as html<App>;
};

export const app = App();

// Load app
const __load__ = () => {
    document.body.replaceChildren(...app);
};
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", __load__);
} else {
    __load__();
}