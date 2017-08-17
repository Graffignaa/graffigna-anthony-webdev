/**
 * Created by Anthony on 8/14/2017.
 */
(function () {
    angular
        .module("StarBook")
        .controller("ProfileController", ProfileController);

    function ProfileController($location, $routeParams, UserService, SwapiService, $route) {
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

                        var ufavoritePeople = [];
                        for (var x in vm.thisUser.favoritePeople) {
                            SwapiService
                                .getPersonById(vm.thisUser.favoritePeople[x])
                                .then(function (response) {
                                    ufavoritePeople.push(response.data);
                                })
                        }
                        var ufavoritePlanets = [];
                        for (var x in vm.thisUser.favoritePlanets) {
                            SwapiService
                                .getPlanetById(vm.thisUser.favoritePlanets[x])
                                .then(function (response) {
                                    ufavoritePlanets.push(response.data);
                                })
                        }

                        vm.thisUserFavoritePeople = ufavoritePeople;
                        vm.thisUserFavoritePlanets = ufavoritePlanets;


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

                        var ufavoritePeople = [];
                        for (var x in vm.thisUser.favoritePeople) {
                            SwapiService
                                .getPersonById(vm.thisUser.favoritePeople[x])
                                .then(function (response) {
                                    ufavoritePeople.push(response.data);
                                })
                        }
                        var ufavoritePlanets = [];
                        for (var x in vm.thisUser.favoritePlanets) {
                            SwapiService
                                .getPlanetById(vm.thisUser.favoritePlanets[x])
                                .then(function (response) {
                                    ufavoritePlanets.push(response.data);
                                })
                        }

                        vm.thisUserFavoritePeople = ufavoritePeople;
                        vm.thisUserFavoritePlanets = ufavoritePlanets;

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
            UserService
                .updateUser(vm.uid, user)
                .then(function (response) {
                    $route.reload();
                });
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
