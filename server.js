// requires
var express = require('express');
var path = require('path');
var app = express();

// global variables
var port = process.env.PORT || 5000;

// use
app.use(express.static('server/public'));

// temporary routing
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'server/public/views/index.html'));
});

// server spin up
app.listen(port, function() {
    console.log('Listening on port: ', port);
})