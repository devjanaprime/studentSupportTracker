var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 5000;

app.use(express.static('server/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'server/public/views/index.html'));
});

app.listen(port, function() {
    console.log('Listening on port: ', port);
})