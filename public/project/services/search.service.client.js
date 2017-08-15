/**
 * Created by Anthony on 7/23/2017.
 */

(function () {
    angular
        .module("SpotifyReviews")
        .factory("SearchService", SearchService);
    function SearchService($http) {

        var api = {
            "searchAlbum": searchAlbum
        };

        var accessToken = "BQDvIgJPwwD5WSBl1Qp_bCbByao6HHJBVrOc9bd0fvmUbObRaQ1T4DBKzrz-5Us3LNJ229XL9QwQDeZgvmYmYocCevv0bhyDDqDcf3JN6Xi5HbCtgeX02aMX-LUCDyO9eg71I3kChr4";
        return api;

        function searchAlbum(queryString) {

            var url = "https://api.spotify.com/v1/search?q=" + queryString + "&type=album";

            console.log("search");
            return $http.get(url, {
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                }
            });


        }


    }
})();
