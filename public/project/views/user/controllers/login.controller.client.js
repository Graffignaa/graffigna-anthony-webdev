(function () {

    angular
        .module("StarBook")
        .controller("LoginController", LoginController);

    function LoginController($location, UserService, $rootScope) {
        var vm = this;

        vm.login = login;

        function init() {

        }

        init();

        function login(user) {
            UserService
                .findUserByCredentials(user.username, user.password)
                .then(function (response) {
                    user = response.data;
                    console.log("LOGIN:" + user);
                    if (user === "0") {
                        vm.errorMessage = "User not found";
                        console.log(vm.errorMessage)
                    } else {
                        $location.url("/" + user._id + "/user/" + user._id);
                    }
                });


        }

    }
})();