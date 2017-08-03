/**
 * Created by Anthony on 7/24/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($location, $routeParams, WebsiteService) {
        var vm = this;
        vm.uid = $routeParams["uid"];

        vm.createWebsite = createWebsite;

        function init() {
            vm.website = {};

            WebsiteService
                .findWebsitesByUser(vm.uid)
                .then(function (response) {
                    vm.websites = response.data;

                });
        }

        init();

        function createWebsite() {

            WebsiteService
                .createWebsite(vm.uid, vm.website)
                .then(function () {
                    $location.url("/user/" + vm.uid + "/website");
                });

        }


    }

})();
