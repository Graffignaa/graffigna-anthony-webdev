/**
 * Created by Anthony on 8/2/2017.
 */
module.exports = function (app) {
    require("./services/user.service.server")(app);
    require("./services/website.service.server.js")(app);
    require("./services/page.service.server")(app);
    require("./services/widget.service.server")(app);
};