window.addEventListener("load", function () {
    recipePush();
    hashHandle();
});

window.addEventListener("hashchange", function () {
    hashHandle();
});
