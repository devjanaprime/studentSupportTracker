var express = require('express');
var router = express.Router();
var Users = require('../models/user');
var path = require('path');

// request for HTML page
router.get('/', function(req, res) {
    console.log('get /register route');
    res.sendFile(path.resolve(__dirname, '../public/views/template/register.html'));
});

// POST request with new user data
router.post('/', function(req, res) {
    console.log('post /register route');

    var userToSave = {
        username: req.body.username,
        password: req.body.password
    };

    Users.create(userToSave, function(err, post) {
        console.log('inside Users.create');
        if(err) {
            console.log('Users.create failed: ', err);
            res.sendStatus(500);
        } else {
            console.log('Users.create success!');
            res.sendStatus(201);
        }
    });
});

module.exports = router;