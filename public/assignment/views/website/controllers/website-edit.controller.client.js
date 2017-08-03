/**
 * Created by Anthony on 7/24/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteEditController($location, $routeParams, WebsiteService) {
        var vm = this;
        vm.uid = $routeParams["uid"];
        vm.wid = $routeParams["wid"];

        vm.updateWebsite = updateWebsite;
        vm.deleteWebsite = deleteWebsite;


        function init() {

            //Init this website
            WebsiteService
                .findWebsiteById(vm.wid)
                .then(function (response) {
                    vm.website = response.data;
                });

            //Init all websites
            WebsiteService
                .findWebsitesByUser(vm.uid)
                .then(function (response) {
                    vm.websites = response.data;

                });
        }

        init();

        function updateWebsite(website) {
            WebsiteService
                .updateWebsite(vm.wid, website)
                .then(function () {
                    $location.url("/user/" + vm.uid + "/website");
                });

        }

        function deleteWebsite() {
            WebsiteService
                .deleteWebsite(vm.wid)
                .then(function () {
                    $location.url("/user/" + vm.uid + "/website");
                });
        }

    }

})();
