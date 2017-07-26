(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetEditController", WidgetEditController);

    function WidgetEditController($sce, $location, WidgetService, $routeParams) {
        var model = this;
        var uid = $routeParams["uid"];
        var wid = $routeParams["wid"];
        var pid = $routeParams["pid"];
        var wgid = $routeParams["wgid"];
        model.trustHtmlContent = trustHtmlContent;
        model.trustUrlResource = trustUrlResource;
        model.getWidgetIncludeUrl = getWidgetIncludeUrl;
        model.createWidget;

        function init() {
            model.hello = "Hello from widgetListController";
            console.log(wgid);
            model.widget = WidgetService.findWidgetById(wgid);

        }

        init();

        function createWidget(widget) {
            if (!widget._id) {
                WidgetService.createWidget(pid, widget);
                console.log("exist");
            }
            else {
                WidgetService.updateWidget(widget._id, widget);
                console.log("no");
            }
            $location.url("/user/" + uid + "/website/" + wid + "/page/" + pid + "/widget")

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