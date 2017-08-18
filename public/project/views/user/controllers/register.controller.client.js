/**
 * Created by Anthony on 7/24/2017.
 */
(function () {
    angular
        .module("StarBook")
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
                        console.log("HELLO I AM USER" + _user.json);
                        if (_user === "0" || _user === 404)  {
                            console.log("past undefined");
                            return UserService
                                .createUser(user)
                                .then(function (response) {
                                    console.log("Oh dear god pls");
                                    _user = response.data;
                                    console.log(_user);
                                    $location.url("/" + _user._id + "/user/" + _user._id);
                                });

                        } else {
                            vm.error = "User already exists";
                            console.log("error");
                        }
                    }
                );


        }

    }


})();
