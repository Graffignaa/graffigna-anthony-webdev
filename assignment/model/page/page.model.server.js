var mongoose = require("mongoose");
var pageSchema = require("./page.schema.server.js");
var db = require("../models.server.js");
var pageModel = mongoose.model("PageModel", pageSchema);
var userModel = require("../user/user.model.server");
var websiteModel = require("../website/website.model.server");

pageModel.createPage = createPage;
pageModel.findAllPagesForWebsite = findAllPagesForWebsite;
pageModel.findPageById = findPageById;
pageModel.updatePage = updatePage;
pageModel.deletePage = deletePage;
module.exports = pageModel;


function createPage(websiteId, page) {
    page._website = websiteId;
    var pageTmp = null;
    return pageModel
        .create(page)
        .then(function (pageDoc) {
            pageTmp = pageDoc;
            return websiteModel.addPage(websiteId, pageDoc._id);
        })
        .then(function (websiteDoc) {
            return pageTmp;
        })
}

function findAllPagesForWebsite(websiteId) {
    return pageModel.find({_website: websiteId});

}

function findPageById(pageId) {
    return pageModel.findById(pageId);
}

function updatePage(pageId, page) {
    return pageModel.update({_id: pageId},
        {$set: page});
}

function deletePage(pageId) {
    var websiteId = pageModel.findPageById(pageId)._website;
    return pageModel
        .remove({_id: pageId})
        .then(function (status) {
            return websiteModel.removePage(websiteId, pageId)
        });
}
