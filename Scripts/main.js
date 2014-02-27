(function () {
    requirejs.config({
        baseUrl: "scripts",
        paths: {
            "jquery": "jquery-2.1.0"
        }
    });

    require(["alerter"], function (alerter /*: { showMessage(): any; }*/ ) {
        alerter.showMessage();
    });
})();
//# sourceMappingURL=main.js.map
