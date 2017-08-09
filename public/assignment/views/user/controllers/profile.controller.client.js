/**
 * Created by Anthony on 7/24/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($location, $routeParams, UserService) {
        var vm = this;
        vm.uid = $routeParams["uid"];

        vm.updateUser = updateUser;
        console.log(vm.user);

        function init() {

            UserService.findUserById(vm.uid)
                .then(function (response) {
                    vm.user = response.data;
                });

        }

        init();

        function updateUser(user) {
            UserService.updateUser(vm.uid, user)
        }


    }

})();
