/**
 * Created by Anthony on 7/24/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteEditController($location, $routeParams, WebsiteService) {
        var vm = this;
        var uid = $routeParams["uid"];
        var wid = $routeParams["wid"];
        vm.updateWebsite = updateWebsite;
        vm.deleteWebsite = deleteWebsite;
        vm.goToProfile = goToProfile;
        vm.goToSelf = goToSelf;
        vm.backToList = backToList;

        function init() {

            WebsiteService
                .findWebsiteById(wid)
                .then(function (response) {
                    vm.website = response.data;
                });
        }

        init();

        function updateWebsite(website) {
            WebsiteService
                .updateWebsite(wid, website)
                .then(function () {
                    console.log("hello");
                    $location.url("/user/" + uid + "/website");
                });

        }

        function deleteWebsite() {
            WebsiteService
                .deleteWebsite(wid)
                .then(function () {
                    $location.url("/user/" + uid + "/website");
                });
        }

        function goToProfile() {
            $location.url(/user/ + uid);
        }

        function goToSelf() {
            $location.url("/user/" + uid + "/website/" + wid);
        }

        function backToList() {
            $location.url("/user/" + uid + "/website/");
        }


    }

})();
