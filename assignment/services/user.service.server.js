/**
 * Created by Anthony on 7/29/2017.
 */
module.exports = function (app) {
    var users = [
        {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", isAdmin: true},
        {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley"},
        {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia"},
        {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi"}
    ];

    //http
    app.post("/api/user", createUser);
    app.get("/api/user", findUser);
    app.get("/api/user/:userId", findUserById);
    app.put("/api/user/:userId", updateUser);
    app.delete("/api/user/:userId", deleteUser);

    var userModel = require("../model/user/user.model.server");

    function createUser(req, res) {

        var user = req.body;
        userModel
            .createUser(user)
            .then(function (user) {
                res.send(user);
            });

    }

    function findUser(req, res) {
        var username = req.query.username;
        var password = req.query.password;

        if (username && password) {

            userModel
                .findUserByCredentials(username, password)
                .then(function (user) {
                    res.json(user);
                    return;
                }, function (err) {
                    res.sendStatus(404).send(err);
                    return;
                })
        } else if (username) {
            userModel
                .findUserByUsername(username)
                .then(function (user) {
                    if (user === null) {
                        res.send("0");
                        return;
                    }
                    res.json(user);
                    return;
                });
            return;
        }

        res.send("0");
    }

    function findUserById(req, res) {
        userModel
            .findUserById(req.params.userId)
            .then(function (user) {
                res.json(user);
            });
    }

    function updateUser(req, res) {
        var userId = req.params.userId;
        var user = req.body;

        userModel
            .updateUser(userId, user)
            .then(function (status) {
                res.json(status);
            }, function (err) {
                res.sendStatus(404).send(err);
            });
        res.sendStatus(404);
    }

    function deleteUser(req, res) {

        var userId = req.params.userId;

        userModel
            .deleteUser(userId)
            .then(function (    ) {
                res.sendStatus(200);
            });
        res.sendStatus(404);

    }


};