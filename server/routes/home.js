var express = require('express');
var router = express.Router();

// handles request for user information if user is authenticated
router.get('/', function(req, res) {
    // check if logged in
    if(req.isAuthenticated()) {
        // send back info
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    } else {
        // redirect to server if auth check fails
        res.send(false);
    }
});

// to logout, clear all session info
router.get('/logout', function(req, res) {
    // Passport's built in log out function
    req.logOut();
    res.sendStatus(200);
});

module.exports = router;