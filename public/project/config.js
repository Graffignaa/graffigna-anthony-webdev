/**
 * Created by Anthony on 8/4/2017.
 */
(function () {
    angular
        .module("SpotifyReviews")
        .config(Config);
    function Config($routeProvider) {
        console.log("hello from config");
        $routeProvider
            .when("/", {
                templateUrl: "views/templates/search.view.client.html",
                controller: "SearchController",
                controllerAs: "model"
            })
            .when("/details/:albumId", {
                templateUrl: "views/templates/details.view.client.html",
                controller: "DetailsController",
                controllerAs: "model"
            })

    }
})();