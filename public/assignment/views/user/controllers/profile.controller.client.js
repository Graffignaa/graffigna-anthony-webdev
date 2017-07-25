/**
 * Created by Anthony on 7/24/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($routeParams, UserService) {
        var vm = this;
        var uid = $routeParams["uid"];

        function init() {
            vm.user = UserService.findUserById(uid);
        }

    }

})();
