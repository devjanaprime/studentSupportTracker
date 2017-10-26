var express = require('express');
var router = express.Router();
var Events = require('../models/event');

// POST request
router.post('/', function(req, res) {
    console.log('req.body in router.pos', req.body);
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