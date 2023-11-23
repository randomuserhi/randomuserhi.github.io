RHU.require(new Error(), {
    docs: "docs", rhuDocuscript: "docuscript",
}, function ({ docs, rhuDocuscript, }) {
    docs.jit = (version, path) => docuscript(({ p, frag, br, link, ot }) => {
        frag(p("test"));
        ot({ widths: [], headings: ["a", "b", "c"] }, ["params", (a) => a.boomer, "content"], {
            params: "bruhs1",
            boomer: "bruhs2",
            content: "bruhs3"
        });
    }, rhuDocuscript);
});
