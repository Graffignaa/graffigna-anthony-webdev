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

    function createPage(req, res) {
        var page = req.body;
        var websiteId = req.params.websiteId;
        page.websiteId = websiteId;
        page._id = (new Date()).getTime() + "";

        pages.push(page);
        res.json(page);

    }

    function findAllPagesForWebsite(req, res) {

        var websiteId = req.params.websiteId;

        var sitePages = [];

        for (var p in pages) {
            if (pages[p].websiteId === websiteId) {
                sitePages.push(pages[p]);
            }
        }

        res.json(sitePages);

    }

    function findPageById(req, res) {

        for (var p in pages) {
            if (pages[p]._id === req.params.pageId) {
                res.json(pages[p]);
            }
        }
        res.sendStatus(404);

    }

    function updatePage(req, res) {

        var pageId = req.params.pageId;
        var page = req.body;

        for (var p in pages) {
            if (pages[p]._id === pageId) {
                pages[p] = page;
                res.json(page);
                return;
            }
        }

        res.sendStatus(404);

    }

    function deletePage(req, res) {

        var pageId = req.params.pageId;

        for (var p in pages) {
            if (pages[p]._id === pageId) {
                pages.splice(p, 1);
                res.sendStatus(200);
                return;
            }
        }

        res.sendStatus(404);


    }

};