// requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var passport = require('./strategies/userStrategy');
var session = require('./modules/session');

// database module
require('./modules/db');

// route includes
var login = require('./routes/login');
var register = require('./routes/register');
var home = require('./routes/home');
var landing = require('./routes/landing');
var index = require('./routes/index');
var logout = require('./routes/logout');

// body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// serving static files
app.use(express.static('./server/public'));

// passport session
app.use(session);

// starting passport sessions
app.use(passport.initialize());
app.use(passport.session());

// route for login failure
app.use('/loginFailure', function(req, res) {
    console.log('LoginFailure');
    res.sendStatus(403);
});

// routes
app.use('/home', home);
app.use('/register', register);
app.use('/login', login);
app.use('/logout', logout);
app.use('/landing', landing);

// catch all route
app.use('/', index);

// setting port
var port = process.env.PORT || 5000;

// server spin up
app.listen(port, function() {
    console.log('Listening on port: ', port);
})