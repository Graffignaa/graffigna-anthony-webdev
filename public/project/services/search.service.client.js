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

        var accessToken = "BQCmjL6W5kEA3ze6tY6zOZYyTpuif-_1CqtUQCUBXjIog7cpeUXKi-uyiwaT4BWC2zmNFSFuyV35dsN5pwzfPbfBpkdQ72fQ60NcQ1oVJhas38mVnUUnAIBYpZiUz7qj_-QDmZ41P7k";
        return api;

        function searchAlbum(queryString) {

            var url = "https://api.spotify.com/v1/search?q=" + queryString + "&type=album";

            return $http.get(url, {
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                }
            });


        }


    }
})();
