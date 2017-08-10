/**
 * Created by Anthony on 8/10/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .service("FlickrService", FlickrService);

    function FlickrService($http) {
        var key = "0515d3b0eb06a89e723e765c6a066588";
        var urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";

        var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=" + key + "&text=";

        this.searchPhotos = searchPhotos;

        function searchPhotos(searchText) {
            url = url + searchText;
            return $http.get(url);
        }

    }
})();