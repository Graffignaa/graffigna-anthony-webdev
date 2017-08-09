/**
 * Created by Anthony on 8/9/2017.
 */
var q = require('q');

var connectionString = 'mongodb://127.0.0.1:27017/assignment'; // for local
if (process.env.MLAB_USERNAME_WEBDEV) {
    var username = process.env.MLAB_USERNAME_WEBDEV;
    var password = process.env.MLAB_PASSWORD_WEBDEV;
    connectionString = 'mongodb://' + username + ':' + password;
    connectionString += '@ds151697.mlab.com:51697/heroku_pwp1bfs2';
}

var mongoose = require("mongoose");
mongoose.connect(connectionString);
mongoose.Promise = q.Promise;