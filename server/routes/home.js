var express = require('express');
var router = express.Router();

// handles request for user information if user is authenticated
router.get('/', function(req, res) {
    console.log('get /home route');
    // check if logged in
    if(req.isAuthenticated()) {
        // send back info
        console.log('logged in! ', req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    } else {
        // redirect to server if auth check fails
        console.log('Not logged in');
        res.send(false);
    }
});

// to logout, clear all session info
router.get('/logout', function(req, res) {
    // Passport's built in log out function
    console.log('logged out');
    req.logOut();
    res.sendStatus(200);
});

module.exports = router;