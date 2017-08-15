/**
 * Created by Anthony on 7/24/2017.
 */
(function () {
    angular
        .module("SpotifyReviews")
        .controller("DetailsController", DetailsController);

    function DetailsController($location, $routeParams, DetailsService, UserService, $route) {
        var vm = this;
        var albumId = $routeParams['albumId'];
        var loggedInId = $routeParams['loggedIn'];

        vm.favorited = false;

        vm.favorite = favorite;
        vm.unfavorite = unfavorite;

        vm.album = [];


        function init() {

            DetailsService.getAlbum(albumId)
                .then(function (response) {
                    console.log(response.data.name);
                    vm.album = response.data;
                    console.log(vm.album);
                });

            UserService
                .findUserById(loggedInId)
                .then(function (response) {
                    vm.loggedInUser = response.data;

                    if (vm.loggedInUser.favorites.indexOf(albumId) !== -1) {
                        vm.favorited = true;
                    }


                })


        }

        init();

        function favorite() {
            UserService
                .favorite(loggedInId, vm.album)
                .then(function (response) {
                    $route.reload();
                })
        }
        function unfavorite() {
            UserService
                .unfavorite(loggedInId, vm.album)
                .then(function (response) {
                    $route.reload();
                })
        }


    }

})();
