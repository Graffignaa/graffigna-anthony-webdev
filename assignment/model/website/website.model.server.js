var mongoose = require("mongoose");
var websiteSchema = require("./website.schema.server.js");
var db = require("../models.server.js");
var websiteModel = mongoose.model("WebsiteModel", websiteSchema);
var userModel = require("../user/user.model.server");
var userSchema = require("../user/user.schema.server")
websiteModel.createWebsiteForUser = createWebsiteForUser;
websiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.updateWebsite = updateWebsite;
websiteModel.deleteWebsite = deleteWebsite;
module.exports = websiteModel;


function createWebsiteForUser(userId, website) {
    website._user = userId;
    var websiteTmp = null;
    return websiteModel
        .create(website)
        .then(function (websiteDoc) {
            websiteTmp = websiteDoc;
            return userModel.addWebsite(userId, websiteDoc._id);
        })
        .then(function (userDoc) {
            return websiteTmp;
        })
}

function findAllWebsitesForUser(userId) {
    return websiteModel
        .find({developer: developerId})
        .populate('developer', 'username')
        .exec();
}

function findWebsiteById(websiteId) {
    return websiteModel.findById(websiteId);
}

function updateWebsite(websiteId, website) {
    return websiteModel.update({_id: websiteId},
        {$set: website});
}

function deleteWebsite(websiteId) {
    var developerId = websiteModel.findWebsiteById(websiteId)._user;
    return websiteModel
        .remove({_id: websiteId})
        .then(function (status) {
            return userModel.removeWebsite(developerId, websiteId)
        });
}
