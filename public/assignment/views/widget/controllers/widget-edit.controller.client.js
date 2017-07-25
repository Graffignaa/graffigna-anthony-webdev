/**
 * Created by Anthony on 7/24/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetEditController", WidgetEditController);

    function WidgetEditController($routeParams, WidgetService) {
        var vm = this;
        var wgid = $routeParams["wgid"];

        function init() {
            vm.widget = WidgetService.findWidgetById(wgid);
        }
    }

})();
