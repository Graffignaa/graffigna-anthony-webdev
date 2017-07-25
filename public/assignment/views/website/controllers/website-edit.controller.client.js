/**
 * Created by Anthony on 7/24/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteEditController($routeParams, WebsiteService) {
        var vm = this;
        var wid = $routeParams["wid"];

        function init() {
            vm.website = WebsiteService.findWebsiteById(wid);
        }

        init();
    }

})();
