var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');

// login POST
router.post('/',
    passport.authenticate('local', {
        successRedirect: '/home',
        failureRedirect: '/loginFailure'
    })
);

module.exports = router;