var express = require('express');
var router = express.Router();
var Events = require('../models/event');

// GET request
router.get('/', function(req, res) {
    Events.find({}, function(err, events) {
        var eventMap = {};

        events.forEach(function(event) {
            eventMap[event._id] = event;
        });
        res.send(eventMap);
    });
});

module.exports = router;