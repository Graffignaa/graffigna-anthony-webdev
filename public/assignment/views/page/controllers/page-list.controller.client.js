/**
 * Created by Anthony on 7/24/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);

    function PageListController($location, $routeParams, PageService) {
        var vm = this;
        var uid = $routeParams["uid"];
        var wid = $routeParams["wid"];

        vm.goToPageEdit = goToPageEdit;
        vm.goToPageWidgets = goToPageWidgets;
        vm.goToSelf = goToSelf;
        vm.goToNew = goToNew;
        vm.goToProfile = goToProfile;
        vm.backToWebsites = backToWebsites;

        function init() {
            vm.pages = PageService.findPagesByWebsiteId(wid);
            console.log(vm.pages);
        }

        init();

        function goToPageEdit(page) {
            $location.url("/user/" + uid + "/website/" + wid + "/page/" + page._id);
        }

        function goToPageWidgets(page) {
            console.log(page._id);
            $location.url("/user/" + uid + "/website/" + wid + "/page/" + page._id + "/widget");
        }

        function goToSelf() {
            $location.url("/user/" + uid + "/website/" + wid + "/page");
        }

        function goToNew() {
            $location.url("/user/" + uid + "/website/" + wid + "/page/new");
        }

        function goToProfile() {
            $location.url(/user/ + uid);
        }

        function backToWebsites() {
            $location.url("/user/" + uid + "/website");
        }
    }


})();
