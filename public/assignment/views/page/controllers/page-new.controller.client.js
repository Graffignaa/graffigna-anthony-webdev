/**
 * Created by Anthony on 7/24/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController);

    function PageNewController($location, $routeParams, PageService) {
        var vm = this;
        var uid = $routeParams["uid"];
        var wid = $routeParams["wid"];

        vm.createPage = createPage;
        vm.goToSelf = goToSelf;
        vm.goToProfile = goToProfile;

        function init() {
            vm.page = {};
        }

        init();

        function createPage() {
            PageService
                .createPage(wid, page)
                .then(function () {
                    $location.url("/user/" + uid + "/website/" + wid + "/page");
                });
        }

        function goToSelf() {
            $location.url(/user/ + uid + "/website/" + wid + "/page/new");
        }

        function goToProfile() {
            $location.url(/user/ + uid);
        }


    }

})();
