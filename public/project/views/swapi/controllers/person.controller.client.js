/**
 * Created by Anthony on 8/14/2017.
 */
(function () {
    angular
        .module("StarBook")
        .controller("PersonController", PersonController);

    function PersonController($location, $routeParams, SwapiService, $route) {
        var vm = this;

        vm.loggedInId = $routeParams["loggedIn"];
        vm.personId = $routeParams["id"];

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
                        })
                });


        }

        init();




    }

})();
