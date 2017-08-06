/**
 * Created by Anthony on 7/24/2017.
 */
(function () {
    angular
        .module("SpotifyReviews")
        .controller("DetailsController", DetailsController);

    function DetailsController($location, $routeParams, DetailsService) {
        var vm = this;
        var albumId = $routeParams['albumId'];

        vm.album = {};



        function init() {

            DetailsService.getAlbum(albumId)
                .then(function (response) {
                    vm.album = response.data;
                })


        }

        init();

        function albumSearch() {
            SearchService.searchAlbum(vm.queryString)
                .then(function (response) {
                    vm.albums = JSON.parse(response.data);
                })


        }


    }

})();
