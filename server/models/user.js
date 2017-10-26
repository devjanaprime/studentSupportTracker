var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

// Mongoose Schema for users
var UserSchema = new Schema({
    name: {type: String, required: true},
    username: {type: String, required: true, index: {unique: true}},
    password: {type: String, required: true}
});

// called before adding new user to DB to encrypt password
UserSchema.pre('save', function(next) {
    var user = this;

    if(!user.isModified('password')) {
        return next();
    }

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if(err) {
            return next(err);
        }
        bcrypt.hash(user.password, salt, function(err, hash) {
            if(err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});

// comparing login password to DB password
UserSchema.methods.comparePassword = function(candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if(err) {
            return callback(err);
        }
        callback(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);