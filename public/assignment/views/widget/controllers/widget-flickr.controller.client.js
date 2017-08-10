(function () {
    angular
        .module("WebAppMaker")
        .controller("FlickrController", FlickrController);

    function FlickrController(FlickrService, $routeParams, WidgetService, $location) {
        var vm = this;

        vm.searchPhotos = searchPhotos;
        vm.selectPhoto = selectPhoto;

        function init() {
            vm.userId = $routeParams["uid"];
            vm.websiteId = $routeParams["wid"];
            vm.pageId = $routeParams["pid"];
            vm.widgetId = $routeParams["wgid"];
            WidgetService
                .findWidgetById(vm.widgetId)
                .then(function (response) {
                    vm.widget = response.data;
                });
        }
        init();

        function selectPhoto(photo) {
            var url = "https://farm"+photo.farm+".staticflickr.com/"+photo.server+"/"+photo.id+"_"+photo.secret+"_b.jpg";
            vm.widget.url = url;
            WidgetService
                .updateWidget(vm.widgetId, vm.widget)
                .then(function () {
                    $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget/"+vm.widget._id);
                });
        }

        function searchPhotos(searchTerm) {
            FlickrService.searchPhotos(searchTerm)
                .then(function(response) {
                    var data = response.data.replace("jsonFlickrApi(","");
                    data = data.substring(0,data.length - 1);
                    data = JSON.parse(data);
                    vm.photos = data.photos;
                });

        }
    }
})();