(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController);

    function WidgetListController($sce, $location, WidgetService, $routeParams) {
        var vm = this;
        vm.uid = $routeParams["uid"];
        vm.wid = $routeParams["wid"];
        vm.pid = $routeParams["pid"];

        vm.trustHtmlContent = trustHtmlContent;
        vm.trustUrlResource = trustUrlResource;
        vm.getWidgetIncludeUrl = getWidgetIncludeUrl;

        function init() {
            WidgetService
                .findWidgetsByPageId(vm.pid)
                .then(function (response) {
                    vm.widgets = response.data;
                });
        }

        init();

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