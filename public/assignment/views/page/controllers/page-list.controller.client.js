/**
 * Created by Anthony on 7/24/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);

    function PageListController($routeParams, PageService) {
        var vm = this;
        var websiteId = $routeParams["wid"];

        function init() {
            vm.pages = PageService.findPagesByWebsiteId(websiteId);
        }

        init();
    }


})();
