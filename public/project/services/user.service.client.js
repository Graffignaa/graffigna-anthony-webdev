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


        function addFavoritePerson(uid, person) {

            var url = "/api/person/favorite/" + uid;
            console.log(url);

            return $http.put(url, person);

        }

        function removeFavoritePerson(uid, person) {
            var url = "/api/person/unfavorite/" + uid;
            return $http.put(url, person);
        }

        function addFavoritePlanet(uid, planet) {
            var url = "/api/planet/favorite/" + uid;
            return $http.put(url, planet);
        }

        function removeFavoritePlanet(uid, planet) {
            var url = "/api/planet/unfavorite/" + uid;
            return $http.put(url, planet);
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

            console.log("CREATE:" + url);
            var ret = $http.post(url, user);
            console.log("RET:" + ret.json);
            return ret;

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
