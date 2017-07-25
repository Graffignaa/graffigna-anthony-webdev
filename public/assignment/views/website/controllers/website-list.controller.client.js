/**
 * Created by Anthony on 7/24/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController($routeParams, WebsiteService) {
        var vm = this;
        var uid = $routeParams["uid"];
        function init() {
            vm.websites = WebsiteService.findWebsitesByUser(uid);
        }
        init();
    }


})();
