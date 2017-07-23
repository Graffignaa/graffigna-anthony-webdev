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
            .when("/user/:userId", {
                templateUrl: "profile.view.client.html"
            })
            .when("/user/:userId/website", {
                templateUrl: "website-list.view.client.html"
            })
            .when("/user/:userId/website/new", {
                templateUrl: "website-new.view.client.html"
            })
            .when("/user/:userId/website/websiteId", {
                templateUrl: "website-edit.view.client.html"
            })
            .when("/user/:userId/website/websiteId/page", {
                templateUrl: "page-list.view.client.html"
            })
            .when("/user/:userId/website/websiteId/page/new", {
                templateUrl: "page-new.view.client.html"
            })
            .when("/user/:userId/website/websiteId/page/pageId", {
                templateUrl: "page-edit.view.client.html"
            })
            .when("/user/:userId/website/websiteId/page/pageId/widget", {
                templateUrl: "widget-list.view.client.html"
            })
            .when("/user/:userId/website/websiteId/page/pageId/widget/new", {
                templateUrl: "widget-list.view.client.html"
            })
            .when("/user/:userId/website/websiteId/page/pageId/widget/widgerId", {
                templateUrl: "widget-edit.view.client.html"
            })
    }
})();
