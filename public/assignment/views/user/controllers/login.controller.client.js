(function () {

    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController);

    function LoginController($location, UserService, $rootScope) {
        var vm = this;

        vm.login = login;

        function init() {

        }

        init();

        function login(user) {
            if (!user) {
                vm.errorMessage = "User not found";
                return;
            }
            UserService
                .findUserByCredentials(user.username, user.password)
                .then(function (response) {
                    user = response.data;
                    if (user === "0") {
                        vm.errorMessage = "User not found";
                    } else {
                        $location.url("user/" + user._id);
                    }
                });


        }

    }
})();