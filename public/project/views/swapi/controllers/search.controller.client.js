/**
 * Created by Anthony on 8/14/2017.
 */
(function () {
    angular
        .module("StarBook")
        .controller("SearchController", SearchController);

    function SearchController($location, $routeParams, SwapiService, $route) {
        var vm = this;

        vm.peopleSearch = "";
        vm.planetSearch = "";
        vm.loggedInId = $routeParams["loggedIn"];
        vm.peopleError = false;

        vm.searchPerson = searchPerson;
        vm.searchPlanet = searchPlanet;


        function init() {


        }

        init();

        function searchPlanet() {
            if (vm.planetSearch !== "") {
                SwapiService
                    .searchPlanet(vm.planetSearch)
                    .then(function (response) {
                        vm.planets = response.data.results;

                        if (vm.planets.length === 0) {
                            vm.planetError = true;
                        }
                        else {
                            vm.planetError = false;
                        }

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

                        if (vm.people.length === 0) {
                            vm.peopleError = true;
                        }
                        else {
                            vm.peopleError = false;
                        }
                    })
            }
            else {
                console.log("No Text");
            }
        }


    }

})();
