(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetEditController", WidgetEditController);

    function WidgetEditController($sce, $location, WidgetService, $routeParams) {
        var vm = this;
        vm.uid = $routeParams["uid"];
        vm.wid = $routeParams["wid"];
        vm.pid = $routeParams["pid"];
        vm.wgid = $routeParams["wgid"];
        vm.trustHtmlContent = trustHtmlContent;
        vm.trustUrlResource = trustUrlResource;
        vm.getWidgetIncludeUrl = getWidgetIncludeUrl;
        vm.updateWidget = updateWidget;
        vm.deleteWidget = deleteWidget;

        function init() {
            WidgetService
                .findWidgetById(vm.wgid)
                .then(function (response) {
                    vm.widget = response.data;
                });
        }

        init();

        function updateWidget(widget) {

            WidgetService
                .updateWidget(vm.wgid, widget)
                .then(function () {
                    $location.url("/user/" + vm.uid + "/website/" + vm.wid + "/page/" + vm.pid + "/widget");
                });

        }

        function deleteWidget() {
            WidgetService
                .deleteWidget(vm.wgid)
                .then(function () {
                    $location.url("/user/" + vm.uid + "/website/" + vm.wid + "/page/" + vm.pid + "/widget");
                });
        }

        function trustUrlResource(url) {
            console.log(url);
            var youtubeUrl = "https://www.youtube.com/embed/";
            var urlParts = url.split("/");
            youtubeUrl += urlParts[urlParts.length - 1];
            return $sce.trustAsResourceUrl(youtubeUrl);
        }

        function trustHtmlContent(htmlContent) {
            return $sce.trustAsHtml(htmlContent);
        }

        function getWidgetIncludeUrl(widgetType) {
            return "views/widget/templates/widgets/widget-" + widgetType + ".view.client.html";
        }
    }
})();