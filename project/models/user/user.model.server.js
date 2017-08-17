/**
 * Created by Anthony on 8/17/2017.
 */
var mongoose = require("mongoose");
var userSchema = require("./user.schema.server");

var userModel = mongoose.model("ProjectUserModel", userSchema);

userModel.createUser = createUser;
userModel.getAllUsers = getAllUsers;

userModel.findUserById = findUserById;
userModel.updateUser = updateUser;
userModel.deleteUser = deleteUser;
userModel.findUserByCredentials = findUserByCredentials;
userModel.findUserByUsername = findUserByUsername;
userModel.followUser = followUser;
userModel.unfollowUser = unfollowUser;

userModel.addFavoritePerson = addFavoritePerson;
userModel.addFavoritePlanet = addFavoritePlanet;
userModel.removeFavoritePerson = removeFavoritePerson;
userModel.removeFavoritePlanet = removeFavoritePlanet;


module.exports = userModel;

function createUser(user) {
    return userModel
        .create(user);
}

function getAllUsers() {
    return userModel
        .find();
}

function findUserById(userId) {
    return userModel
        .findById(userId);
}


function updateUser(userId, user) {
    return userModel
        .update(
            {_id: userId},
            {$set: user})
        .then((function (user) {
            return userModel.findUserById(userId);
        }));
}

function findUserByUsername(username) {
    return userModel
        .findOne({username: username});
}

function findUserByCredentials(username, password) {
    return userModel
        .findOne({username: username, password: password});
}


function deleteUser(userId) {
    return userModel
        .findUserById(userId)
        .then(function (user) {
            return user.remove();
        });
}

function addFavoritePerson(userId, favId) {

    return userModel
        .findUserById(userId)
        .then(function (user) {
            user.favoritePeople.push(favId);
            return user.save();
        })

}

function addFavoritePlanet(userId, favId) {
    return userModel
        .findUserById(userId)
        .then(function (user) {
            user.favoritePlanets.push(favId);
            return user.save();
        })
}

function removeFavoritePerson(userId, favId) {
    return userModel
        .findUserById(userId)
        .then(function (user) {
            var index = user.favoritePeople.indexOf(favId);
            user.favoritePeople.splice(index);
            return user.save();
        })
}

function removeFavoritePlanet(userId, favId) {
    return userModel
        .findUserById(userId)
        .then(function (user) {
            var index = user.favoritePlanets.indexOf(favId);
            user.favoritePlanets.splice(index);
            return user.save();
        })
}


function followUser(userId, followerId) {
    return userModel
        .findUserById(userId)
        .then(function (user) {
            user.followers.push(followerId);
            userModel
                .findUserById(followerId)
                .then(function (follower) {
                    follower.following.push(userId);
                    return follower.save();
                });
            return user.save();
        })
}

function unfollowUser(userId, followerId) {
    return userModel
        .findUserById(userId)
        .then(function (user) {
            var index = user.followers.indexOf(followerId);
            user.followers.splice(index, 1);
            userModel
                .findUserById(followerId)
                .then(function (follower) {
                    var findex = follower.following.indexOf(userId);
                    follower.following.splice(findex, 1);
                    return follower.save();
                });
            return user.save();
        })
}


