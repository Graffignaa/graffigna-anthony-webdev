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


                });


        }

        init();




    }

})();
