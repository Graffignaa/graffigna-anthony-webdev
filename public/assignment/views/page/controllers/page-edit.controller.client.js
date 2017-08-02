/**
 * Created by Anthony on 7/24/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("PageEditController", PageEditController);

    function PageEditController($location, $routeParams, PageService) {
        var vm = this;
        var uid = $routeParams["uid"];
        var wid = $routeParams["wid"];
        var pid = $routeParams["pid"];

        vm.updatePage = updatePage;
        vm.deletePage = deletePage;
        vm.goToProfile = goToProfile;
        vm.goToSelf = goToSelf;
        vm.backToList = backToList;

        function init() {
            PageService
                .findPageById(pid)
                .then(function (response) {
                    vm.page = response.data;
                })
        }

        init();

        function updatePage(page) {
            PageService
                .updatePage(pid, page)
                .then(function () {
                    $location.url("/user/" + uid + "/website/" + wid + "/page");
                });
        }

        function deletePage() {
            PageService
                .deletePage(pid)
                .then(function () {
                    $location.url("/user/" + uid + "/website/" + wid + "/page");
                });
        }

        function goToProfile() {
            $location.url(/user/ + uid);
        }

        function goToSelf() {
            $location.url("/user/" + uid + "/website/" + wid + "/page/" + pid);
        }

        function backToList() {
            $location.url("/user/" + uid + "/website/" + wid + "/page");
        }


    }

})();
