/**
 * Created by Anthony on 7/24/2017.
 */
(function () {
    angular
        .module("SpotifyReviews")
        .controller("SearchController", SearchController);

    function SearchController($location, $routeParams) {
        var vm = this;

        vm.albums = [];

        vm.albumSearch = albumSearch;


        function init() {
            vm.queryString = "";
            console.log("hello");
        }

        init();

        function albumSeach() {
            //Call service
        }


    }

})();
