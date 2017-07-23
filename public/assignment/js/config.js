/**
 * Created by Anthony on 7/23/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .config(Config);
    function Config($routeProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "login.view.client.html"
            })
            .when("/", {
                templateUrl: "login.view.client.html"
            })
            .when("/register", {
                templateUrl: "register.view.client.html"
            })
            .when("/user/:uid", {
                templateUrl: "profile.view.client.html"
            })
            .when("/user/:uid/website", {
                templateUrl: "website-list.view.client.html"
            })
            .when("/user/:uid/website/new", {
                templateUrl: "website-new.view.client.html"
            })
            .when("/user/:uid/website/wid", {
                templateUrl: "website-edit.view.client.html"
            })
            .when("/user/:uid/website/wid/page", {
                templateUrl: "page-list.view.client.html"
            })
            .when("/user/:uid/website/wid/page/new", {
                templateUrl: "page-new.view.client.html"
            })
            .when("/user/:uid/website/wid/page/pid", {
                templateUrl: "page-edit.view.client.html"
            })
            .when("/user/:uid/website/wid/page/pid/widget", {
                templateUrl: "widget-list.view.client.html"
            })
            .when("/user/:uid/website/wid/page/pid/widget/new", {
                templateUrl: "widget-list.view.client.html"
            })
            .when("/user/:uid/website/wid/page/pid/widget/wgid", {
                templateUrl: "widget-edit.view.client.html"
            })


    }
})();
