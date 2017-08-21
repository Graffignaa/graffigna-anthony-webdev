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
        vm.isAdmin = false;


        vm.createUser = createUser;
        vm.deleteUser = deleteUser;

        function init() {

            vm.user = {};
            UserService
                .getAllUsers()
                .then(function (response) {
                    vm.users = response.data;
                    UserService
                        .findUserById(loggedInId)
                        .then(function (response) {
                            if (response.data.role === "admin") {
                                vm.isAdmin = true;
                            }
                        })
                })


        }

        init();

    }

})();
