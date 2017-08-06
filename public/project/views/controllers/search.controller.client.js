/**
 * Created by Anthony on 7/24/2017.
 */
(function () {
    angular
        .module("SpotifyReviews")
        .controller("SearchController", SearchController);

    function SearchController($location, $routeParams, SearchService) {
        var vm = this;

        vm.albums = [];

        vm.albumSearch = albumSearch;


        function init() {
            vm.queryString = "";
            console.log("hello");
        }

        init();

        function albumSearch() {
            SearchService.searchAlbum(vm.queryString)
                .then(function (response) {
                    vm.albums = response.data;
                })


        }


    }

})();
