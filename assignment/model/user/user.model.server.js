var mongoose = require("mongoose");
var userSchema = require("./user.schema.server.js");
var userModel = mongoose.model("UserModel", userSchema);

userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.updateUser = updateUser;
userModel.findUserByCredentials = findUserByCredentials;
userModel.findUserByUsername = findUserByUsername;
userModel.deleteUser = deleteUser;
userModel.addWebsite = addWebsite;
userModel.removeWebsite = removeWebsite;

module.exports = userModel;



function createUser(user) {
    return userModel.create(user);
}

function findUserById(userId) {
    return userModel.findById(userId);
}

function findUserByUsername(username) {
    return userModel.findOne({username: username});
}

function findUserByCredentials(username, password) {
    return userModel.findOne({username: username, password: password});
}

function updateUser(userId, user) {
    return userModel.update({_id: userId},
        {$set: user});
}

function deleteUser(userId) {
    userModel.remove({_id: userId});
}

function addWebsite(developerId, websiteId) {
    return userModel
        .findById(developerId)
        .then(function (user) {
            user.websites.push(websiteId);
            return user.save();
        });
}

function removeWebsite(developerId, websiteId) {
    return userModel
        .findById(developerId)
        .then(function (user) {
            var index = user.websites.indexOf(websiteId);
            user.websites.splice(index, 1);
            return user.save();
        })
}
