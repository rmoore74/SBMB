var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var Post = new Schema({
    title   : String,
    content : String,
    author  : String,
    date    : Date
});

module.exports = mongoose.model('Post', Post);
