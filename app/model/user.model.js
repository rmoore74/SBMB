var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var User = new Schema({
    username : String,
    password : String,
    admin    : Boolean
});

module.exports = mongoose.model('User', User);
