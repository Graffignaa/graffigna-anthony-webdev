/**
 * Created by Anthony on 8/4/2017.
 */
(function () {
    angular
        .module("SpotifyReviews")
        .config(Config);
    function Config($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/templates/search.view.client.html",
                controller: "SearchController",
                controllerAs: "model"
            })
            .when("/details/:albumId", {
                templateUrl: "album-details.view.client.html",
                controller: "AlbumDetailsController",
                controllerAs: "model"
            })
    }
});