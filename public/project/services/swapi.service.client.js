/**
 * Created by Anthony on 8/16/2017.
 */


(function () {
    angular
        .module("StarBook")
        .factory("SwapiService", SwapiService);
    function SwapiService($http) {

        var api = {
            "searchPerson": searchPerson,
            "searchPlanet": searchPlanet,
            "getPersonById": getPersonById,
            "getPlanetById": getPlanetById,
            "getFilm": getFilm,
            "getSpecies": getSpecies,
        };
        return api;

        function searchPerson(queryString) {

            var url = "https://swapi.co/api/people/?search=" + queryString;

            return $http.get(url);
        }


        function searchPlanet(queryString) {

            var url = "https://swapi.co/api/planets/?search=" + queryString;

            return $http.get(url);
        }


        function getPersonById(id) {
            var url = "https://swapi.co/api/people/" + id;
            return $http.get(url);
        }

        function getPlanetById(id) {
            var url = "https://swapi.co/api/planets/" + id;
            return $http.get(url);
        }

        function getFilm(id) {
            var url = "https://swapi.co/api/films/" + id;
            return $http.get(url);
        }

        function getSpecies(id) {
            var url = "https://swapi.co/api/species/" + id;
            return $http.get(url);
        }

        function findUserByUsername(username) {

            var url = "/api/user?username=" + username;
            console.log(url);
            return $http.get(url);
        }


    }
})();
