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
            .when("/login", {
                templateUrl: "views/user/templates/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })
            .when("/register", {
                templateUrl: "views/user/templates/register.view.client.html",
                controller: "RegisterController",
                controllerAs: "model"
            })
            //:loggedIn - the ID of the logged in user
            //:userId - the ID of the user whose page you're on
            .when("/:loggedIn/user/:userId", {
                templateUrl: "views/user/templates/profile.view.client.html",
                controller: "ProfileController",
                controllerAs: "model"
            })

            .when("/:loggedIn/user", {
                templateUrl: "views/user/templates/user-list.view.client.html",
                controller: "UserListController",
                controllerAs: "model"
            })

            .when("/:loggedIn/details/:albumId", {
                templateUrl: "views/templates/details.view.client.html",
                controller: "DetailsController",
                controllerAs: "model"
            })

            .when("/:loggedIn/search", {
                templateUrl: "views/templates/search.view.client.html",
                controller: "SearchController",
                controllerAs: "model"
            })


    }
})();