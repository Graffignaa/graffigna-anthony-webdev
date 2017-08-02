(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController);

    function WidgetListController($sce, $location, WidgetService, $routeParams) {
        var model = this;
        var uid = $routeParams["uid"];
        var wid = $routeParams["wid"];
        var pid = $routeParams["pid"];
        model.trustHtmlContent = trustHtmlContent;
        model.trustUrlResource = trustUrlResource;
        model.getWidgetIncludeUrl = getWidgetIncludeUrl;
        model.goToSelf = goToSelf;
        model.backToPage = backToPage;
        model.goToNew = goToNew;
        model.goToProfile = goToProfile;
        model.goToWidgetEdit = goToWidgetEdit;
        function init() {
            WidgetService
                .findWidgetsByPageId(pid)
                .then(function (response) {
                    model.widgets = response.data;
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

        function goToSelf() {
            $location.url("/user/" + uid + "/website/" + wid + "/page/" + pid + "/widget");
        }

        function backToPage() {
            $location.url("/user/" + uid + "/website/" + wid + "/page");
        }

        function goToWidgetEdit(widgetId) {
            $location.url("/user/" + uid + "/website/" + wid + "/page/" + pid + "/widget/" + widgetId);
        }

        function goToNew() {
            $location.url("/user/" + uid + "/website/" + wid + "/page/" + pid + "/widget/new");
        }

        function goToProfile() {
            $location.url(/user/ + uid);
        }


        function trustHtmlContent(htmlContent) {
            return $sce.trustAsHtml(htmlContent);
        }

        function getWidgetIncludeUrl(widgetType) {
            return "views/widget/templates/widgets/widget-" + widgetType + ".view.client.html";
        }
    }
})();