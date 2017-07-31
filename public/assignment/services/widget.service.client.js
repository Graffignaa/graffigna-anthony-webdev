/**
 * Created by Anthony on 7/23/2017.
 */

(function () {
    angular
        .module("WebAppMaker")
        .factory("WidgetService", WidgetService);
    function WidgetService($http) {


        var api = {
            "createWidget": createWidget,
            "findWidgetsByPageId": findWidgetsByPageId,
            "findWidgetById": findWidgetById,
            "updateWidget": updateWidget,
            "deleteWidget": deleteWidget
        };
        return api;

        function createWidget(pageId, widget) {

            var url = "/api/page/" + pageId + "/widget";
            $http.post(url, widget);


        }

        function findWidgetsByPageId(pageId) {

            var url = "/api/page/" + pageId + "/widget";
            $http.get(url);

        }

        function findWidgetById(widgetId) {

            var url = "/api/widget/" + widgetId;
            $http.get(url);
        }

        function updateWidget(widgetId, widget) {
            var url = "/api/widget/" + widgetId;
            $http.put(url, widgetId);
        }

        function deleteWidget(widgetId) {
            var url = "/api/widget/" + widgetId;
            $http.delete(url);
        }

    }
})();
