var app = angular.module("WebAppMaker", ["ngRoute"]);

//app.controller("loginController", loginController);
app.controller("profileController", profileController);

app.config(configuration);

function configuration($routeProvider) {
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


}

var users = [
    {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder"},
    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley"},
    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia"},
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi"}
];

function profileController($scope, $routeParams) {
    var userId = $routeParams["userId"];
    for (var u in users) {
        if (users[u]._id === userId) {
            $scope.user = users[u];
        }
    }
}

function loginController($scope, $location) {


    $scope.login = function (user) {

        for (var u in users) {
            var _user = users[u];
            if (_user.username === user.username && _user.password === user.password) {
                $location.url("profile/+_user._id")
            }
        }
        $scope.errorMessage = "User Not Found";
        //alert(user.username + ' ' + user.password);
    }

}