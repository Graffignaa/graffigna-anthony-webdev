/**
 * Created by Anthony on 8/14/2017.
 */
(function () {
    angular
        .module("StarBook")
        .controller("PlanetController", PlanetController);

    function PlanetController($location, $routeParams, SwapiService, $route) {
        var vm = this;

        vm.loggedInId = $routeParams["loggedIn"];
        vm.planetId = $routeParams["id"];

        // vm.searchPerson = searchPerson;
        // vm.searchPlanet = searchPlanet;


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

                });


        }

        init();

        function searchPlanet() {
            if (vm.planetSearch !== "") {
                SwapiService
                    .searchPlanet(vm.planetSearch)
                    .then(function (response) {
                        vm.planets = response.data.results;
                    })
            }
            else {
                console.log("No Text");
            }
        }

        function searchPerson() {
            if (vm.peopleSearch !== "") {
                SwapiService
                    .searchPerson(vm.peopleSearch)
                    .then(function (response) {
                        vm.people = response.data.results;
                    })
            }
            else {
                console.log("No Text");
            }
        }


    }

})();
