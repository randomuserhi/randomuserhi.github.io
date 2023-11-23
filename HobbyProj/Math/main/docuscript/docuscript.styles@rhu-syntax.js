RHU.module(new Error(), "docuscript/style", { Style: "rhu/style", theme: "main/theme" }, function ({ Style, theme }) {
    const style = Style(({ style }) => {
        const body = style.class `
            `;
        const block = style.class `
            width: 100%;
            `;
        const center = style.class `
            width: 100%;
            `;
        style `
            ${center}>* {
                margin: 0 auto;
            }
            `;
        style `
            ${body} table {
                word-wrap: break-word;
                border: 1px solid #333;
                border-collapse: collapse;
            }
            ${body} td {
                vertical-align: top;
                padding: 0.5rem;
                border-block-start: 1px solid #333;
            }
            `;
        style `
            ${body} i {
                font-style: italic;
            }
            ${body} b {
                font-weight: bold;
            }
            `;
        style `
            ${body} h1, h2, h3, h4, h5, h6 {
                padding-bottom: 8px;
                padding-top: 16px;
                font-weight: 700;
            }

            ${body} h1 {
                font-size: 2rem;
            }
            ${body} h2 {
                font-size: 1.8rem;
            }
            ${body} h3 {
                font-size: 1.5rem;
            }
            ${body} h4 {
                font-size: 1.3rem;
            }
            ${body} h5 {
                font-size: 1.125rem;
            }
            ${body} h6 {
                font-size: 1rem;
            }
            `;
        style `
            ${body} img {
                border-radius: 8px;
                margin: 8px auto;
            }
            `;
        style `
            ${body} ol {
                counter-reset: list-item;
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
            ${body} ol>li {
                display: flex;
                gap: 1rem;
            }
            ${body} ol>li::before {
                content: counter(list-item) ") ";
                counter-increment: list-item;
            }
            `;
        style `
            ${body} ul>li {
                display: flex;
                gap: 1rem;
            }
            ${body} ul>li::before {
                content: "•";
            }
            `;
        const desmos = style.class `
            margin: 8px 0;
            width: 100%;
            aspect-ratio: 800/600;
            border: 0px;
            `;
        const inlineCode = style.class `
            padding: 0 3px;
            border-radius: 3px;
            `;
        style `
            ${body} code {
                border-radius: 8px;
                margin: 8px auto;
            }
            `;
        return {
            body,
            desmos,
            inlineCode,
            block,
            center
        };
    });
    return style;
});
