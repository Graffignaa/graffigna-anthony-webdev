/**
 * Created by Anthony on 8/17/2017.
 */
var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
        name: String,
        username: String,
        password: String,
        role: {type: String, default: "user", enum: ["admin", "user"]},
        email: String,
        favoritePeople: [Number],
        favoritePlanets: [Number],
        following: [{type: mongoose.Schema.Types.ObjectId, ref: 'ProjectUserModel'}],
        followers: [{type: mongoose.Schema.Types.ObjectId, ref: 'ProjectUserModel'}],
        google: {
            id: String,
            token: String
        }
    },
    {collection: "project-user"});


module.exports = userSchema;