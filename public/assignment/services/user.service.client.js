/**
 * Created by Anthony on 7/23/2017.
 */

(function () {
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);
    function UserService($http) {

        var api = {
            "createUser": createUser,
            "findUserById": findUserById,
            "findUserByUsername": findUserByUsername,
            "findUserByCredentials": findUserByCredentials,
            "updateUser": updateUser,
            "deleteUser": deleteUser
        };
        return api;

        function createUser(user) {

            var url = "/api/user";

            return $http.post(url, user);

        }

        function findUserById(id) {

            return $http.get("/api/user/" + id);

        }

        function findUserByUsername(username) {

            var url = "/api/user?username=" + username;
            return $http.get(url);

        }

        function findUserByCredentials(username, password) {
            var url = "/api/user?username=" + username + "&password=" + password;
            // /user?username=alice&password=alice

            return $http.get(url);

        }

        function updateUser(userId, user) {
            var url = "/api/user/" + userId;

            return $http.put(url, user);
        }

        function deleteUser(userId) {

            var url = "/api/user/" + userId;

            return $http.delete(url, user);

        }


    }
})();
