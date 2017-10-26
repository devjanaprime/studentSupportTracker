var express = require('express');
var router = express.Router();
var Events = require('../models/event');

// POST request to add new event
router.post('/', function(req, res) {
    var eventToSave = {
        userId: req.user._id,
        date: req.body.date,
        attendees: req.body.attendees,
        notes: req.body.notes,
        eventName: req.body.eventName,
        volunteers: req.body.volunteers
    };

    Events.create(eventToSave, function(err, post) {
        if(err) {
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    });
});

module.exports = router;