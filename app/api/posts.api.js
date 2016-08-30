var express  = require('express');
var router   = express.Router();
var mongoose = require('../../config/mongoose.js');
var Post     = require('mongoose').model('Post');

router.post('/addpost', function(req, res) {
    res.json({ 'message': 'add post temp message' });
});

router.delete('removepost', function(req, res) {
    res.json({ 'message': 'remove post temp message' });
});

module.exports = router;
