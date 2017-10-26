var express = require('express');
var router = express.Router();
var path = require('path');

// request for HTML page
router.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../public/views/template/landing.html'));
});

module.exports = router;