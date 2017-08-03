/**
 * Created by Anthony on 7/24/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);

    function PageListController($location, $routeParams, PageService) {
        var vm = this;
        vm.uid = $routeParams["uid"];
        vm.wid = $routeParams["wid"];


        function init() {
            PageService
                .findPagesByWebsiteId(vm.wid)
                .then(function (response) {
                    vm.pages = response.data;
                })
        }

        init();

   
    }


})();
