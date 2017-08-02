/**
 * Created by Anthony on 7/24/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController($location, $routeParams, WebsiteService) {
        var vm = this;
        var uid = $routeParams["uid"];

        vm.goToWebsiteEdit = goToWebsiteEdit;
        vm.goToWebsitePages = goToWebsitePages;
        vm.goToSelf = goToSelf;
        vm.goToNew = goToNew;
        vm.goToProfile = goToProfile;

        function init() {
            WebsiteService
                .findWebsitesByUser(uid)
                .then(function (websites){
                    vm.websites = websites;
                })


            vm.websites = WebsiteService.findWebsitesByUser(uid);
        }

        init();

        function goToWebsiteEdit(website) {
            $location.url("/user/" + uid + "/website/" + website._id);
        }

        function goToWebsitePages(website) {
            $location.url("/user/" + uid + "/website/" + website._id + "/page");
        }

        function goToSelf() {
            $location.url("/user/" + uid + "/website");
        }

        function goToNew() {
            $location.url("/user/" + uid + "/website/new");
        }

        function goToProfile() {
            $location.url(/user/ + uid);
        }
    }


})();
