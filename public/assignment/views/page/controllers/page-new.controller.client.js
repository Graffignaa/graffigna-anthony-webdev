/**
 * Created by Anthony on 7/24/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController);

    function PageNewController($location, $routeParams, PageService) {
        var vm = this;
        vm.uid = $routeParams["uid"];
        vm.wid = $routeParams["wid"];

        vm.createPage = createPage;


        function init() {
            vm.page = {};

            PageService
                .findPagesByWebsiteId(vm.wid)
                .then(function (response) {
                    vm.pages = response.data;

                });
        }

        init();

        function createPage() {
            PageService
                .createPage(vm.wid, vm.page)
                .then(function () {
                    $location.url("/user/" + vm.uid + "/website/" + vm.wid + "/page");
                });
        }


    }

})();
