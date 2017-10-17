var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');

// login form POST
router.post('/',
    passport.authenticate('local', {
        successRedirect: '/home',
        failureRedirect: '/loginFailure'
    })
);

router.get('/', function(req, res) {
    console.log('request for index');
    res.sendFile(path.join(__dirname, '../public/views/index.html'));
});


module.exports = router;