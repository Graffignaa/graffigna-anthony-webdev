/**
 * Created by Anthony on 7/30/2017.
 */
module.exports = function (app) {


    var pages = [
        {"_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem"},
        {"_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem"},
        {"_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem"}
    ];

    app.post("/api/website/:websiteId/page", createPage);
    app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
    app.get("/api/page/:pageId", findPageById);
    app.put("/api/page/:pageId", updatePage);
    app.delete("/api/page/:pageId", deletePage);

    var pageModel = require("../model/page/page.model.server");

    function createPage(req, res) {
        var page = req.body;
        var websiteId = req.params.websiteId;

        return pageModel
            .createPage(websiteId, page)
            .then(function (pageDoc) {
                res.json(pageDoc);
            }, function (err) {
                res.statusCode(500).send(err);
            })

    }

    function findAllPagesForWebsite(req, res) {

        var websiteId = req.params.websiteId;

        return pageModel
            .findAllPagesForWebsite(websiteId)
            .then(function (pages) {
                res.json(pages);
            })
    }

    function findPageById(req, res) {

        return pageModel
            .findPageById(req.params.pageId)
            .then(function (pageDoc) {
                res.json(pageDoc)
            }, function (err) {
                res.sendStatus(500).send(err);
            })

    }

    function updatePage(req, res) {

        var pageId = req.params.pageId;
        var page = req.body;

        return pageModel
            .updatePage(pageId, page)
            .then(function (website) {
                res.json(website);
            })

    }

    function deletePage(req, res) {

        var pageId = req.params.pageId;

        pageModel
            .deletePage(pageId)
            .then(function (status) {
                res.json(status);
            })


    }

};