var mongoose = require('mongoose');

// mongo
var mongoURI = '';
// process.env.MONGODB_URI will only be defined if hosted on Heroku
if (process.env.MONGODB_URI != undefined) {
    mongoURI = process.env.MONGODB_URI;
} else {
    mongoURI = 'mongodb://localhost:27017/wsu';
}

var mongoDB = mongoose.connect(mongoURI, { useMongoClient: true });

mongoose.connection.on('error', function(err) {
    if(err) {
        console.log('MONGO ERROR: ', err);
    }
    res.sendStatus(500);
});

mongoose.connection.once('open', function() {
    console.log('Connected to Mongo');
});

module.exports = mongoDB;