/**
 * Created by Anthony on 8/12/2017.
 */


(function () {
    angular
        .module("SpotifyReviews")
        .factory("UserService", UserService);
    function UserService($http) {

        var api = {
            "createUser": createUser,
            "findUserById": findUserById,
            "findUserByUsername": findUserByUsername,
            "findUserByCredentials": findUserByCredentials,
            "updateUser": updateUser,
            "deleteUser": deleteUser,
            "followUser": followUser,
            "unfollowUser": unfollowUser,
            "getAllUsers": getAllUsers,
            "favorite": favorite,
            "unfavorite": unfavorite
        };
        return api;

        function favorite(userId, album) {

            var url = "/api/user/favorite/" + userId;
            console.log(url);
            return $http.put(url, album);

        }

        function unfavorite(userId, album) {

            var url = "/api/user/unfavorite/" + userId;

            return $http.put(url, album);

        }

        function getAllUsers() {
            return $http.get("/api/user/all");

        }

        function followUser(thisUid, follower) {
            var url = "/api/user/follow/" + thisUid;
            console.log(url);
            return $http.put(url, follower);
        }

        function unfollowUser(thisUid, follower) {
            var url = "/api/user/unfollow/" + thisUid;

            return $http.put(url, follower);
        }

        function createUser(user) {

            var url = "/api/user";

            return $http.post(url, user);

        }

        function findUserById(id) {

            return $http.get("/api/user/" + id);

        }

        function findUserByUsername(username) {

            var url = "/api/user?username=" + username;
            console.log(url);
            return $http.get(url);
        }

        function findUserByCredentials(username, password) {
            var url = "/api/user?username=" + username + "&password=" + password;
            console.log(url);
            // /user?username=alice&password=alice
            return $http.get(url);

        }

        function updateUser(userId, user) {
            var url = "/api/user/" + userId;

            return $http.put(url, user);
        }

        function deleteUser(userId) {

            var url = "/api/user/" + userId;

            return $http.delete(url);

        }


    }
})();
