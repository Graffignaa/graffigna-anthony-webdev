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
                        .findUserById(vm.loggedInId)
                        .then(function (response) {
                            if (response.data.role === "admin") {
                                vm.isAdmin = true;
                            }
                        })
                })


        }

        init();

        function createUser() {
            if (vm.user) {
                UserService
                    .createUser(vm.user)
                    .then(function (response) {
                        vm._user = response.data;
                        console.log(vm._user);
                        $location.url("/" + vm.loggedInId + "/user/" + vm._user._id);
                    })
            }
        }

        function deleteUser(id) {
            UserService
                .deleteUser(id)
                .then(function (response) {
                    $route.reload();
                })
        }

    }

})();
