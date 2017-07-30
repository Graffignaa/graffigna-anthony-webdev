/**
 * Created by Anthony on 7/30/2017.
 */
var app = require("../../../node_modules/express/index");

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

}

function findAllPagesForWebsite(req, res) {

}

function findPageById(req, res) {

}

function updatePage(req, res) {

}

function deletePage(req, res) {

}