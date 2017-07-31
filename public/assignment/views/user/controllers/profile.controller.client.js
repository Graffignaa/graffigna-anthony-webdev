/**
 * Created by Anthony on 7/24/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($location, $routeParams, UserService) {
        var vm = this;
        var uid = $routeParams["uid"];

        vm.goToWebsites = goToWebsites;
        vm.goToProfile = goToProfile;


        function init() {

            UserService.findUserById(uid)
                .then(function (response) {
                    vm.user = response.data;
                });
        }

        init();

        function goToWebsites(user) {
            $location.url("/user/" + user._id + "/website");
        }

        function goToProfile(user) {
            $location.url = "/user/" + user._id;
        }


    }

})();
