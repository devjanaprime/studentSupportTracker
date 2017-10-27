var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// mongoose schema for attendees
var AttendeeSchema = new Schema({
    name: {type: String, required: true}
});

// mongoose schema for volunteers
var VolunteerSchema = new Schema({
    name: {type: String}
});

// mongoose schema for events
var EventSchema = new Schema({
    userId: {type: Schema.ObjectId, ref: 'User'},
    date: {type: Date, required: true},
    attendees: [AttendeeSchema],
    notes: {type: String},
    eventName: {type: String, required: true},
    volunteers: [VolunteerSchema]
});


module.exports = mongoose.model('Event', EventSchema);