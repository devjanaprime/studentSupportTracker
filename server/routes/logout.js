var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');


// to logout, clear all session info
router.get('/', function(req, res) {
    console.log('in the logout router');
    // Passport's built in log out function
    req.logOut();
    res.sendStatus(200);
});

module.exports = router;