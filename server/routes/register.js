var express = require('express');
var router = express.Router();
var Users = require('../models/user');
var path = require('path');

// request for HTML page
router.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../public/views/template/register.html'));
});

// POST request with new user data
router.post('/', function(req, res) {

    var userToSave = {
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
    };
// check if email is primeacademy.io, send 500 if doesn't match
// regular express
// .includes()
    Users.create(userToSave, function(err, post) {
        if(err) {
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    });
});

module.exports = router;