/**
 * Created by Anthony on 8/14/2017.
 */
(function () {
    angular
        .module("StarBook")
        .controller("UserListController", UserListController);

    function UserListController($location, $routeParams, UserService, $route) {
        var vm = this;
        vm.loggedInId = $routeParams["loggedIn"];
        vm.users = [];

        function init() {

            UserService
                .getAllUsers()
                .then(function (response) {
                    vm.users = response.data;
                })


        }

        init();

    }

})();
