var express = require('express');
var router = express.Router();
var path = require('path');

// gets static html file
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

module.exports = router;