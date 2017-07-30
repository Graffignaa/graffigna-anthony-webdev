(function () {
    angular
        .module("WebAppMaker", ["ngRoute"]);


    module.exports = function (app) {
        require("../services/user.service.client")(app);
        require("../services/website.service.server.js")(app);
        require("../services/page.service.server.js")(app);
        require("../services/widget.service.server.js")(app);
    };


})();