/**
 * Created by Anthony on 8/14/2017.
 */
(function () {
    angular
        .module("StarBook")
        .controller("PersonController", PersonController);

    function PersonController($location, $routeParams, SwapiService, UserService, $route) {
        var vm = this;

        vm.loggedInId = $routeParams["loggedIn"];
        vm.personId = $routeParams["id"];

        vm.favorite = favorite;
        vm.unfavorite = unfavorite;

        // vm.searchPerson = searchPerson;
        // vm.searchPlanet = searchPlanet;


        function init() {

            SwapiService
                .getPersonById(vm.personId)
                .then(function (response) {
                    vm.person = response.data;
                    vm.planetId = vm.person.homeworld.substring(29, (vm.person.homeworld.length - 1));
                    SwapiService
                        .getPlanetById(vm.person.homeworld.substring(29, (vm.person.homeworld.length - 1)))
                        .then(function (response) {
                            vm.planet = response.data;
                        });
                    console.log(vm.person.species[0].substring(29, (vm.person.species[0].length - 1)));

                    SwapiService
                        .getSpecies(vm.person.species[0].substring(29, (vm.person.species[0].length - 1)))
                        .then(function (response) {
                            vm.species = response.data;
                        });

                    vm.filmAddresses = vm.person.films;
                    vm.films = [];
                    for (var f in vm.filmAddresses) {
                        SwapiService
                            .getFilm(vm.filmAddresses[f].substring(27, (vm.filmAddresses[f].length - 1)))
                            .then(function (response) {
                                vm.films.push(response.data);
                            })
                    }

                    vm.favorited = false;

                    UserService
                        .findUserById(vm.loggedInId)
                        .then(function (response) {
                            vm.loggedInUser = response.data;


                            for (var i in vm.loggedInUser.favoritePeople) {
                                if (vm.loggedInUser.favoritePeople[i] === vm.personId) {
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
                .addFavoritePerson(vm.loggedInId, vm.person)
                .then(function (response) {
                    $route.reload();
                })
        }

        function unfavorite() {
            UserService
                .removeFavoritePerson(vm.loggedInId, vm.person)
                .then(function (response) {
                    $route.reload();
                })
        }


    }

})();
