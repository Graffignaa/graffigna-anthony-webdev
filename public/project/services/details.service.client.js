/**
 * Created by Anthony on 7/23/2017.
 */

(function () {
    angular
        .module("SpotifyReviews")
        .factory("DetailsService", DetailsService);
    function DetailsService($http) {

        var api = {
            "getAlbum": getAlbum
        };

        var accessToken = "BQDvIgJPwwD5WSBl1Qp_bCbByao6HHJBVrOc9bd0fvmUbObRaQ1T4DBKzrz-5Us3LNJ229XL9QwQDeZgvmYmYocCevv0bhyDDqDcf3JN6Xi5HbCtgeX02aMX-LUCDyO9eg71I3kChr4";
        return api;

        function getAlbum(albumId) {

            var url = "https://api.spotify.com/v1/albums/" + albumId

            console.log("Details");
            return $http.get(url, {
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                }
            });


        }


    }
})();
