/**
 * Created by Anthony on 7/24/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("PageEditController", PageEditController);

    function PageEditController($location, $routeParams, PageService) {
        var vm = this;
        vm.uid = $routeParams["uid"];
        vm.wid = $routeParams["wid"];
        vm.pid = $routeParams["pid"];

        vm.updatePage = updatePage;
        vm.deletePage = deletePage;


        function init() {
            PageService
                .findPagesByWebsiteId(vm.wid)
                .then(function (response) {
                    vm.pages = response.data;

                });

            PageService
                .findPageById(vm.pid)
                .then(function (response) {
                    vm.page = response.data;
                })
        }

        init();

        function updatePage(page) {
            PageService
                .updatePage(vm.pid, page)
                .then(function () {
                    $location.url("/user/" + vm.uid + "/website/" + vm.wid + "/page");
                });
        }

        function deletePage() {
            PageService
                .deletePage(vm.pid)
                .then(function () {
                    $location.url("/user/" + vm.uid + "/website/" + vm.wid + "/page");
                });
        }




    }

})();
