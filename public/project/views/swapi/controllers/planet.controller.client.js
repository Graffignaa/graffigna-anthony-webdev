/**
 * Created by Anthony on 8/14/2017.
 */
(function () {
    angular
        .module("StarBook")
        .controller("PlanetController", PlanetController);

    function PlanetController($location, $routeParams, UserService, SwapiService, $route) {
        var vm = this;

        vm.loggedInId = $routeParams["loggedIn"];
        vm.planetId = $routeParams["id"];

        vm.favorite = favorite;
        vm.unfavorite = unfavorite;


        function init() {

            SwapiService
                .getPlanetById(vm.planetId)
                .then(function (response) {
                    vm.planet = response.data;
                    vm.inhabitantAddresses = vm.planet.residents;
                    vm.inhabitants = [];
                    for (var i in vm.inhabitantAddresses) {
                        SwapiService
                            .getPersonById(vm.inhabitantAddresses[i].substring(28, (vm.inhabitantAddresses[i].length - 1)))
                            .then(function (response) {
                                vm.inhabitants.push(response.data);
                            })
                    }
                    vm.filmAddresses = vm.planet.films;
                    vm.films = [];
                    for (var f in vm.filmAddresses) {
                        SwapiService
                            .getFilm(vm.filmAddresses[f].substring(27, (vm.filmAddresses[f].length - 1)))
                            .then(function (response) {
                                vm.films.push(response.data);
                            })
                    }
                    console.log(vm.films);

                    vm.favorited = false;

                    UserService
                        .findUserById(vm.loggedInId)
                        .then(function (response) {
                            vm.loggedInUser = response.data;


                            for (var i in vm.loggedInUser.favoritePlanets) {
                                if (vm.loggedInUser.favoritePlanets[i] === vm.personId) {
                                    vm.favorited = true;
                                }
                            }
                            console.log(vm.favorited);
                        });


                });


        }

        init();


        function favorite() {
            UserService
                .addFavoritePlanet(vm.loggedInId, vm.person)
                .then(function (response) {
                    $route.reload();
                })
        }

        function unfavorite() {
            UserService
                .removeFavoritePlanet(vm.loggedInId, vm.person)
                .then(function (response) {
                    $route.reload();
                })
        }

    }

})();
