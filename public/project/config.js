/**
 * Created by Anthony on 8/4/2017.
 */
(function () {
    angular
        .module("StarBook")
        .config(Config);
    function Config($routeProvider) {
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

            .when("/:loggedIn/search", {
                templateUrl: "views/swapi/templates/search.view.client.html",
                controller: "SearchController",
                controllerAs: "model"
            })

            .when("/:loggedIn/person/:id", {
                templateUrl: "views/swapi/templates/person.view.client.html",
                controller: "PersonController",
                controllerAs: "model"
            })

            .when("/:loggedIn/planet/:id", {
                templateUrl: "views/swapi/templates/planet.view.client.html",
                controller: "PlanetController",
                controllerAs: "model"
            })

            .when("/", {
                templateUrl: "views/home/home.view.client.html"
            })


    }
})();