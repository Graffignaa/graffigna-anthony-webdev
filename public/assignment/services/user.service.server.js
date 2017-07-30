/**
 * Created by Anthony on 7/29/2017.
 */

var app = require("../../../node_modules/express/index");

var users = [
    {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", isAdmin: true},
    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley"},
    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia"},
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi"}
];

//http
app.post("/api/user", createUser);
app.get("/api/user?username=username", findUserByUsername);
app.get("/api/user?username=username&password=password", findUserByCredentials);
app.get("/api/user/:userId", findUserById);
app.put("/api/user/:userId", updateUser);
app.delete("/api/user/:userId", deleteUser);


function createUser(req, res) {
    var user = req.body;
    user._id = (new Date()).getTime() + "";
    users.push(user);
    res.send(user);
}

function findUserByUsername(req, res) {

    var username = req.query.username;
    if (username) {
        for (var u in users) {
            var _user = users[u];
            if (_user.username === username) {
                res.send(_user);
                return;
            }
        }
    }
    res.send("0");
}

function findUserByCredentials(req, res) {
    var username = req.query.username;
    var password = req.query.password;

    if (username && password) {
        for (var u in users) {
            var _user = users[u];
            if (_user.username === username && _user.password === password) {
                res.send(_user);
                return;
            }
        }
    } else if (username) {
        for (var u in users) {
            if (users[u].username === username) {
                res.send(users[u]);
                return;
            }
        }
    }
    res.send("0");
}

function findUserById(req, res) {
    for (var u in users) {
        if (users[u]._id === req.params.userId) {
            res.send(users[u]);
        }
    }
}

function updateUser(req, res) {
    var userId = req.params.userId;
    var user = req.body;

    for (var u in users) {
        if (users[u]._id === userId) {
            users[u] = user;
            res.send(user)
            return;
        }
    }
    res.sendStatus(404);
}

function deleteUser(req, res) {

    var userId = req.params.userId;

    var index = 0;
    for (var u in users) {
        if (users[u]._id === userId) {
            users.splice(index, 1);
            res.send(user);
            return;
        }
        index++;
    }

}