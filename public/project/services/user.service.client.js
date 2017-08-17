/**
 * Created by Anthony on 8/12/2017.
 */


(function () {
    angular
        .module("StarBook")
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
            "addFavoritePerson": addFavoritePerson,
            "removeFavoritePerson": removeFavoritePerson,
            "addFavoritePlanet": addFavoritePlanet,
            "removeFavoritePlanet": removeFavoritePlanet

        };
        return api;


        function addFavoritePerson(uid, personId) {

            var url = "/api/person/favorite/" + uid;
            return $http.put(url, personId);

        }

        function removeFavoritePerson(uid, personId) {
            var url = "/api/person/unfavorite/" + uid;
            return $http.put(url, personId);
        }

        function addFavoritePlanet(uid, planetId) {
            var url = "/api/planet/favorite/" + uid;
            return $http.put(url, planetId);
        }

        function removeFavoritePlanet(uid, planetId) {
            var url = "/api/planet/unfavorite/" + uid;
            return $http.put(url, planetId);
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
