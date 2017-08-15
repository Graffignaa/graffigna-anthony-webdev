/**
 * Created by Anthony on 8/14/2017.
 */
(function () {
    angular
        .module("SpotifyReviews")
        .controller("ProfileController", ProfileController);

    function ProfileController($location, $routeParams, UserService, DetailsService, $route) {
        var vm = this;
        vm.uid = $routeParams["userId"];
        vm.loggedInId = $routeParams["loggedIn"];
        vm.followingUser = false;

        vm.updateUser = updateUser;
        vm.followUser = followUser;
        vm.unfollowUser = unfollowUser;

        function init() {

            //If this is YOUR profile
            if (vm.uid === vm.loggedInId) {

                vm.ownProfile = true;

                UserService
                    .findUserById(vm.uid)
                    .then(function (response) {
                        vm.thisUser = response.data;
                        vm.loggedInUser = response.data;


                        var ufollowers = [];
                        for (var f in vm.thisUser.followers) {
                            UserService
                                .findUserById(vm.thisUser.followers[f])
                                .then(function (response) {
                                    ufollowers.push(response.data);
                                })
                        }

                        var ufollowing = [];
                        for (var q in vm.thisUser.following) {
                            UserService
                                .findUserById(vm.thisUser.following[q])
                                .then(function (response) {
                                    ufollowing.push(response.data);
                                })
                        }

                        vm.thisUserFollowers = ufollowers;
                        vm.thisUserFollowing = ufollowing;


                        var ufavorites = [];
                        for (var z in vm.thisUser.favorites) {
                            DetailsService
                                .getAlbum(vm.thisUser.favorites[z])
                                .then(function (response) {
                                    ufavorites.push(response.data);
                                })
                        }
                        vm.thisUserFavorites = ufavorites;


                    })
            }
            //If this is someone else's profile
            else {

                vm.ownProfile = false;
                UserService
                    .findUserById(vm.uid)
                    .then(function (response) {
                        vm.thisUser = response.data;

                        var ufollowers = [];
                        for (var f in vm.thisUser.followers) {
                            UserService
                                .findUserById(vm.thisUser.followers[f])
                                .then(function (response) {
                                    ufollowers.push(response.data);
                                })
                        }

                        var ufollowing = [];
                        for (var q in vm.thisUser.following) {
                            UserService
                                .findUserById(vm.thisUser.following[q])
                                .then(function (response) {
                                    ufollowing.push(response.data);
                                })
                        }

                        vm.thisUserFollowers = ufollowers;
                        vm.thisUserFollowing = ufollowing;

                        var ufavorites = [];
                        for (var z in vm.thisUser.favorites) {
                            DetailService
                                .getAlbum(vm.thisUser.favorites[z])
                                .then(function (response) {
                                    ufavorites.push(response.data);
                                })
                        }
                        vm.thisUserFavorites = ufavorites;


                        vm.followingUser = false;
                        for (var v in vm.thisUser.followers) {
                            if (vm.thisUser.followers[v] === vm.loggedInId) {
                                vm.followingUser = true;
                                console.log("followingUser" + vm.followingUser);
                            }
                        }

                        console.log(vm.followingUser);

                    });


                UserService
                    .findUserById(vm.loggedInId)
                    .then(function (response) {
                        vm.loggedInUser = response.data;
                    })
            }

        }

        init();

        function updateUser(user) {
            UserService.updateUser(vm.uid, user)
        }

        //Makes the logged in user follow the user whose page we're on.
        function followUser() {
            UserService
                .followUser(vm.uid, vm.loggedInUser)
                .then(function (response) {
                    console.log(response.data);
                    $route.reload();
                });
        }

        function unfollowUser() {
            UserService
                .unfollowUser(vm.uid, vm.loggedInUser)
                .then(function (response) {
                    $route.reload();
                });
        }


    }

})();
