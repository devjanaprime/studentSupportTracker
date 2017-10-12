var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var User = require('../models/user.js');

// store user's info during authentication for later use
// stores in req.session.passport.user
passport.serializeUser(function(user, done) {
    console.log('User serialized!', user);
    done(null, user.id);
});

// runs after user has been authenticated on every request match user.id to DB
// stored in req.user
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        if(err) {
            done(err);
        }
        console.log('User deserialized!', user.id);
        done(null, user);
    });
});

// for logging in, called by POST in index route middleware
passport.use('local', new localStrategy({
    passReqToCallback: true,
    usernameField: 'username'
}, function(req, username, password, done) {
    // mongoose
    User.findOne({username: username}, function(err, user) {
        if(err) {
            throw err;
        }
        // user variable passed to us from mongoose
        if(!user) {
            // user not found
            console.log('userStrategy: user not found!');
            return done(null, false, {message: 'Incorrect credentials.'});
        } else {
            // user found, check that password matches
            user.comparePassword(password, function(err, isMatch) {
                if(err) {
                    throw err;
                }
                if (isMatch) {
                    // populate user on the session with serializeUser
                    console.log('userStrategy: password matched!');
                    return done(null, user);
                } else {
                    // password didn't match
                    console.log('userStrategy: password not a match');
                    done(null, false, {message: 'Incorrect credentials.'});
                }
            });
        }
    });
}));

module.exports = passport;