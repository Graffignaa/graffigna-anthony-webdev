/**
 * Created by Anthony on 7/24/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController($location, $routeParams, WebsiteService) {
        var vm = this;
        vm.uid = $routeParams["uid"];

        function init() {

            WebsiteService
                .findWebsitesByUser(vm.uid)
                .then(function (response) {
                    vm.websites = response.data;
                });

        }

        init();


    }


})();
