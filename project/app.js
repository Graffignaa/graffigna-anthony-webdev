module.exports = function (app) {

    require("./services/user.service.server.js")(app);
    var db = require("./models/database");

};