/**
 * Created by Anthony on 7/24/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetChooseController", WidgetChooseController);

    function WidgetChooseController($location, $routeParams, WidgetService) {

        var vm = this;
        vm.uid = $routeParams["uid"];
        vm.wid = $routeParams["wid"];
        vm.pid = $routeParams["pid"];

        vm.createWidget = createWidget;

        function init() {

        }

        init();

        function createWidget(type) {
            var widget = {};
            if (type === "HTML") {
                widget.widgetType = "HTML";
            }
            else if (type === "HEADING") {
                widget.widgetType = "HEADING";
            }
            else if (type === "IMAGE") {
                widget.widgetType = "IMAGE";
            }
            else {
                widget.widgetType = "YOUTUBE";
            }

            WidgetService
                .createWidget(vm.pid, widget)
                .then(function (response) {
                    var w = response.data;
                    $location.url("/user/" + vm.uid + "/website/" + vm.wid + "/page/" + vm.pid + "/widget/" + w._id);

                });

        }

    }

})();
