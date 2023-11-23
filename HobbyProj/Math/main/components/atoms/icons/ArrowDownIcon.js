RHU.module(new Error(), "components/atoms/icons/arrowDown", {
    Macro: "rhu/macro"
}, function ({ Macro }) {
    const icon = Macro((() => {
        const icon = function () {
        };
        return icon;
    })(), "atoms/icons/arrowDown", `
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5303 15.5303C12.2374 15.8232 11.7626 15.8232 11.4697 15.5303L5.46967 9.53033C5.17678 9.23744 5.17678 8.76256 5.46967 8.46967C5.76256 8.17678 6.23744 8.17678 6.53033 8.46967L12 13.9393L17.4697 8.46967C17.7626 8.17678 18.2374 8.17678 18.5303 8.46967C18.8232 8.76256 18.8232 9.23744 18.5303 9.53033L12.5303 15.5303Z"/>
        `, {
        element: `<svg viewBox="0 0 24 24" fill="currentColor"></svg>`
    });
    return icon;
});
