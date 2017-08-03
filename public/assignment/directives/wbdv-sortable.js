/**
 * Created by Anthony on 8/2/2017.
 */
(function () {
    angular
        .module("wbdv", [])
        .directive("wbdvSortable", wbdvSortable);

    function wbdvSortable($http) {
        function linkFunction(scope, element) {

            var initial = -1;
            var final = -1;
            $("#sortable")
                .sortable(
                    {
                        start: function (event, ui) {
                            initial = ui.item.index();
                        },
                        stop: function (event, ui) {
                            final = ui.item.index();
                            $http.put("/api/page/" + scope.model.pid + "/widget?initial=" + initial + "&final=" + final);
                        }
                    }
                );
        }

        return {
            link: linkFunction
        }
    }
})();