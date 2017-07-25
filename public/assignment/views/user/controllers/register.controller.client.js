/**
 * Created by Anthony on 7/24/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, $routeParams, UserService) {
        var vm = this;

        vm.registerUser = registerUser;

        function init() {

        }

        init();

        function registerUser(user) {
            var _user = UserService.findUserByUsername(user.username);
            if (!_user) {
                if (user.password === user.verifyPassword) {
                    var user = UserService.createUser(user);
                    $location.url("/user/" + user._id);
                }
                else {
                    vm.error = "Passwords Don't Match!";
                }
            } else {
                vm.error = "User already exists";
            }
        }

    }


})();
