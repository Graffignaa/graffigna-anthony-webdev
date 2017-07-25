(function () {

    angular
        .module("WamApp")
        .controller("LoginController", LoginController);

    function LoginController($location, userService, $rootScope) {
        var vm = this;

        vm.login = login;

        function init() {

        }
        init();

        function login(user) {
            user = UserService.findUserByCredentials(user.username, user.password);
            if(user) {
                $location.url("/user/" + user._id);
            } else {
                vm.alert = "Unable to login";
            }
        }

    }
})();