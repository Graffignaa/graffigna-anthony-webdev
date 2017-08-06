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

        var accessToken = "BQCmjL6W5kEA3ze6tY6zOZYyTpuif-_1CqtUQCUBXjIog7cpeUXKi-uyiwaT4BWC2zmNFSFuyV35dsN5pwzfPbfBpkdQ72fQ60NcQ1oVJhas38mVnUUnAIBYpZiUz7qj_-QDmZ41P7k";
        return api;

        function getAlbum(albumId) {

            var url = "https://api.spotify.com/v1/albums/" + albumId


            return $http.get(url, {
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                }
            });


        }


    }
})();
