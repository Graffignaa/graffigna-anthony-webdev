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
            var _user;
            UserService.findUserByUsername(user.username)
                .then(function (response) {
                    _user = response.data;
                    if (_user === "0") {
                        return UserService
                            .createUser(user)
                            .then(function (response) {
                                _user = response.data;
                                $location.url("/profile/" + _user._id);
                            });

                    } else {
                        vm.error = "User already exists";
                    }
                }
        );


        }

    }


})();
