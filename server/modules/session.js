var session = require('express-session');

module.exports = session({
    secret: 'secret',
    key: 'user',
    resave: 'true',
    saveUninitialized: false,
    cookie: {maxAge: 60000, secure: false}
});