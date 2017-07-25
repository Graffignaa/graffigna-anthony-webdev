/**
 * Created by Anthony on 7/24/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("PageEditController", PageEditController);

    function PageEditController($routeParams, PageService) {
        var vm = this;
        var pid = $routeParams["pid"];

        function init() {
            vm.page = PageService.findPageById(pid);
        }
        init();
    }

})();
