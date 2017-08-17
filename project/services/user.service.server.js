/**
 * Created by Anthony on 8/12/2017.
 */
module.exports = function (app) {

    var userModel = require("../models/user/user.model.server");

    var users = [
        {
            "_id": "123",
            "name": "alice",
            "username": "alice",
            "password": "alice",
            "email": "alice@wonderland.com",
            "followers": [],
            "following": [],
            "favoritePeople": [],
            "favoritePlanets": []
        },
        {
            "_id": "234",
            "name": "bob",
            "username": "bob",
            "password": "bob",
            "email": "bob@marley.com",
            "followers": [],
            "following": [],
            "favoritePeople": [],
            "favoritePlanets": []
        }

    ];

//http
    app.post("/api/user", createUser);
    app.get("/api/user/all", getAllUsers);
    app.get("/api/user/:userId", findUserById);
    app.put("/api/user/:userId", updateUser);
    app.delete("/api/user/:userId", deleteUser);


    app.get("/api/user", findUser);
    app.put("/api/user/follow/:uid", followUser);
    app.put("/api/user/unfollow/:uid", unfollowUser);

    app.put("/api/person/favorite/:uid", addFavoritePerson);
    app.put("/api/person/unfavorite/:uid", removeFavoritePerson);
    app.put("/api/planet/favorite/:uid", addFavoritePlanet);
    app.put("/api/planet/unfavorite/:uid", removeFavoritePlanet);


    function addFavoritePlanet(req, res) {

        var userId = req.params.uid;
        var favId = req.body.url.substring(29, req.body.url.length - 1); //ID of person being favorited

        userModel
            .addFavoritePlanet(userId, favId)
            .then(function (status) {
                res.json(status);
            }, function (err) {
                res.status(500).send(err);
            })
    }


    function removeFavoritePlanet(req, res) {
        var userId = req.params.uid;
        var favId = req.body.url.substring(29, req.body.url.length - 1); //ID of person being favorited

        userModel
            .removeFavoritePlanet(userId, favId)
            .then(function (status) {
                res.json(status);
            }, function (err) {
                res.status(500).send(err);
            })


    }

    function addFavoritePerson(req, res) {

        var userId = req.params.uid;
        var favId = req.body.url.substring(28, req.body.url.length - 1); //ID of person being favorited

        userModel
            .addFavoritePerson(userId, favId)
            .then(function (status) {
                res.json(status);
            }, function (err) {
                res.status(500).send(err);
            })

    }


    function removeFavoritePerson(req, res) {
        var userId = req.params.uid;
        var favId = req.body.url.substring(28, req.body.url.length - 1); //ID of person being favorited

        userModel
            .removeFavoritePerson(userId, favId)
            .then(function (status) {
                res.json(status);
            }, function (err) {
                res.status(500).send(err);
            })


    }

    function followUser(req, res) {
        var thisUserId = req.params.uid;
        var followerId = req.body;


        userModel
            .followUser(thisUserId, followerId)
            .then(function (status) {
                res.json(status);
            }, function (err) {
                res.status(500).send(err);
                return;
            });


    }

    function unfollowUser(req, res) {

        var thisUserId = req.params.uid;
        var followerId = req.body._id;

        userModel
            .unfollowUser(thisUserId, followerId)
            .then(function (status) {
                res.json(status);
            }, function (err) {
                res.status(500).send(err);
                return;
            })


    }

    function createUser(req, res) {

        var user = req.body;
        user.role = "user"

        userModel
            .createUser(user)
            .then(function (user) {
                    res.json(user);
                },
                function (err) {
                    res.json(err);
                })


    }

    function getAllUsers(req, res) {
        userModel
            .getAllUsers()
            .then(function (users) {
                res.json(users);
            }, function (err) {
                res.status(500).send(err);
                return;
            });
    }

    function findUserById(req, res) {
        var id = req.params.userId;

        userModel
            .findUserById(id)
            .then(function (user) {
                res.json(user);
            }, function (err) {
                res.status(500).send(err);
            });

    }

    function updateUser(req, res) {
        var user = req.body;
        var id = req.params.userId;

        userModel
            .updateUser(id, user)
            .then(function (status) {
                res.json(status);
            }, function (err) {
                res.sendStatus(404).send(err);
            });
    }


    function findUser(req, res) {
        var username = req.query.username;
        var password = req.query.password;


        if (password) {

            userModel
                .findUserByCredentials(username, password)
                .then(function (user) {
                    if (user === null) {
                        res.send("0");
                        return;
                    }
                    res.json(user);
                    return;
                }, function (err) {
                    res.sendStatus(404).send(err);
                })

        }
        else {
            userModel
                .findUserByUsername(username)
                .then(function (user) {
                    if (user === null) {
                        res.send("0");
                        return;
                    }
                    res.json(user);
                    return;
                }, function (err) {
                    res.status(500).send(err);
                    return;
                });
            return;
        }
        res.json("0");
    }


    function deleteUser(req, res) {
        var id = req.params.userId;

        userModel
            .deleteUser(id)
            .then(function (status) {
                res.sendStatus(200);
            }, function (err) {
                res.status(500).send(err);
                return;
            });
    }


}
;