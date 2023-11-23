RHU.require(new Error(), {
    docs: "docs", rhuDocuscript: "docuscript",
}, function ({ docs, rhuDocuscript, }) {
    docs.jit = (version, path) => docuscript(({ h, p, frag, br, link, img }) => {
        p("This is the Docuscript document for my Multimedia and Game Development coursework. The Github rep can be found ", link("https://github.com/randomuserhi/gamedev-coursework", "here"), ".");
    }, rhuDocuscript);
});
