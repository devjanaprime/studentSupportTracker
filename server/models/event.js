var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// mongoose schema for events
var EventSchema = new Schema({
    userId: {type: Schema.ObjectId, ref: 'User'},
    date: {type: Date, required: true},
    attendees: {type: Array, required: true},
    notes: {type: String},
    eventName: {type: String, required: true},
    volunteers: {type: Array}
});

module.exports = mongoose.model('Event', EventSchema);