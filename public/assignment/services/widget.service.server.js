/**
 * Created by Anthony on 7/30/2017.
 */

var app = require("../../../node_modules/express/index");


var widgets = [
    {"_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
    {"_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    {
        "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
        "url": "http://lorempixel.com/400/200/"
    },
    {"_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
    {"_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    {
        "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
        "url": "https://youtu.be/AM2Ivdi9c4E"
    },
    {"_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
];

app.post("/api/page/:pageId/widget", createWidget);
app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
app.get("/api/page/:pageId/widget", findWidgetById);
app.put("/api/page/:pageId/widget", updateWidget);
app.delete("/api/page/:pageId/widget", deleteWidget);

function createWidget(req, res) {
    var widget = req.body;
    var pageId = req.params.pageId;
    widget.pageId = pageId;
    widget._id = (new Date()).getTime() + "";

    widgets.push(widget);
    res.json(widget);
}

function findAllWidgetsForPage(req, res) {

    var pageId = req.params.pageId;

    var pageWidgets = [];

    for (var w in widgets) {
        if (widgets[w].pageId === pageId) {
            pageWidgets.push(widgets[w]);
        }
    }

    res.json(pageWidgets);

}

function findWidgetById(req, res) {

    for (var w in widgets) {
        if (widgets[w]._id === req.params.widgetId) {
            res.json(widgets[w]);
        }
    }
    res.sendStatus(404);


}

function updateWidget(req, res) {

    var widgetId = req.params.widgetId;
    var widget = req.body;

    for (var w in widgets) {
        if (widgets[w]._id === widgetId) {
            widgets[w] = widget;
            res.send(widget);
            return;
        }
    }
    res.sendStatus(404);

}

function deleteWidget(req, res) {

    var widget = req.params.widgetId;

    var index = 0;
    for (var w in widgets) {
        if (widgets[w]._id === widgetId) {
            widgets.splice(index, 1);
            res.send(widget);
            return;
        }
        index++;
    }
    res.sendStatus(404);


}