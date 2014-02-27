(function () {

    requirejs.config(
        {
            baseUrl: "scripts",
            paths: {
                "jquery": "jquery-2.1.0"
            }
        }
        );

    require(["alerter"],
        (alerter/*: { showMessage(): any; }*/) => {
            alerter.showMessage();
        });
})();