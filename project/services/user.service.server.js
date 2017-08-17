/**
 * Created by Anthony on 8/12/2017.
 */
module.exports = function (app) {
    var users = [
        {
            "_id": "123",
            "name": "alice",
            "username": "alice",
            "password": "alice",
            "email": "alice@wonderland.com",
            "followers": [],
            "following": [],
            "favorites": []
        },
        {
            "_id": "234",
            "name": "bob",
            "username": "bob",
            "password": "bob",
            "email": "bob@marley.com",
            "followers": [],
            "following": [],
            "favorites": []
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


    function addFavorite(req, res) {

        var userId = req.params.uid;
        var album = req.body;
        console.log(album.id);

        var user = findByIdInternal(userId);
        user.favorites.push(album.id);

        res.json(user);
        return user;

    }


    function removeFavorite(req, res) {
        var userId = req.params.uid;
        var album = req.body;
        var albumId = album.id;


        var user = findByIdInternal(userId);

        for (var f in user.favorites) {
            if (user.favorites[f] === albumId) {
                user.favorites.splice(+f, 1);
                res.json(200);
                return user;
            }
        }
        res.json(404);


    }

    function followUser(req, res) {
        var thisUserId = req.params.uid;
        var followerId = req.body;


        var thisUser = findByIdInternal(thisUserId);
        var follower = findByIdInternal(followerId._id);

        if (thisUser && follower) {
            thisUser.followers.push(follower._id);
            follower.following.push(thisUserId);
            console.log(follower.following);
            res.json(200);
            return thisUser;
        }
        res.json(404);


    }

    function unfollowUser(req, res) {

        var thisUserId = req.params.uid;
        var follower = findByIdInternal(req.body._id);

        var thisUser = findByIdInternal(thisUserId);


        if (thisUser && follower) {
            var removedFollower = false;
            var removedFollowing = false;
            for (var f in thisUser.followers) {
                if (thisUser.followers[f] === follower._id) {
                    thisUser.followers.splice(+f, 1);
                    removedFollower = true;
                    console.log("removedFollower");
                }
            }

            console.log("this:" + thisUser._id);
            for (var v in follower.following) {
                console.log("f.f:" + follower.following[v]);
                if (follower.following[v] === thisUser._id) {
                    follower.following.splice(+v, 1);
                    removedFollowing = true;
                    console.log(follower.following);
                }
            }

            if (removedFollower && removedFollowing) {
                console.log("flag2");
                res.json(200);
                return thisUser;
            }
        }
        res.json(404);

    }

    function findByIdInternal(uid) {
        for (var u in users) {
            if (users[u]._id === uid) {
                return users[u];
            }
        }
        return null;
    }

    function createUser(req, res) {

        var user = req.body;
        user._id = (new Date()).getTime() + "";
        users.push(user);
        res.json(user);

    }

    function getAllUsers(req, res) {
        res.json(users);
        return users;
    }

    function findUserById(req, res) {
        var id = req.params.userId;
        for (var u in users) {
            if (users[u]._id === id) {
                res.json(users[u]);
                return users[u];
            }
        }
        res.json(404);
    }

    function findUser(req, res) {
        var username = req.query.username;
        var password = req.query.password;


        if (password) {
            console.log("pass");
            for (var u in users) {
                console.log("U/P: " + users[u].username + "," + users[u].password);
                if (users[u].username === username && users[u].password === password) {
                    console.log("flag");
                    res.json(users[u]);
                    return users[u];
                }
            }
        }
        else {
            for (var u in users) {
                if (users[u].username === username) {
                    res.json(users[u]);
                    return users[u];
                }
            }
        }
        res.json(404);
    }

    function updateUser(req, res) {
        var user = req.body;
        var id = req.params.userId;

        for (var u in users) {
            if (users[u]._id === id) {
                users[u] = user;
                res.json(user);
                return user;
            }
        }
        res.json(404);
    }

    function deleteUser(req, res) {
        var id = req.params.userId;
        for (var u in users) {
            if (users[u]._id === id) {
                users.splice(u, 1);
                res.json(200);
            }
        }
        res.json(404);
    }


}
;