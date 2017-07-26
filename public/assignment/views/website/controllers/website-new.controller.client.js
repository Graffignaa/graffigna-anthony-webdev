/**
 * Created by Anthony on 7/24/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($location, $routeParams, WebsiteService) {
        var vm = this;
        var uid = $routeParams["uid"];

        vm.createWebsite = createWebsite;
        vm.goToSelf = goToSelf;
        vm.goToProfile = goToProfile;

        function init() {
           vm.website = {};
        }

        init();

        function createWebsite() {
           // console.log(vm.);
            WebsiteService.createWebsite(uid, vm.website);
            $location.url("/user/" + uid + "/website");
        }

        function goToSelf() {
            $location.url(/user/ + uid + "/website/new");
        }

        function goToProfile() {
            $location.url(/user/ + uid);
        }


    }

})();
