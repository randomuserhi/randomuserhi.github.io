(() => {
    let DOCUSCRIPT_ROOT = "";
    if (document.currentScript) {
        let s = document.currentScript;
        let r = s.src.match(/(.*)[/\\]/);
        if (r)
            DOCUSCRIPT_ROOT = r[1] || "";
    }
    else {
        throw new Error("Failed to get document root.");
    }
    RHU.module(new Error(), "docs/indices", {
        docs: "docs",
    }, function ({ docs, }) {
        ((docs) => {
            const stack = [];
            const dir = (dir, func) => {
                stack.push(dir);
                const current = [...stack];
                let prio = 0;
                const d = (path, page) => {
                    docs.set(`${[...current, ...path.split("/")].join("/")}`, page, prio++);
                    return path;
                };
                func(d);
                stack.pop();
            };
            let prio = 0;
            const set = (path, page) => {
                docs.set(path, page, prio++);
                return path;
            };
            set("Question 1", "Q1.js");
        })(docs.create("1.0.0", "Question 1"));
        return {
            DOCUSCRIPT_ROOT
        };
    });
})();
