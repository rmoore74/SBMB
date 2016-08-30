var express  = require('express');
var router   = express.Router();
var Post     = require('mongoose').model('Post');

router.post('/add', function(req, res) {
    res.json({ 'message': 'add post temp message' });
});

router.delete('/remove', function(req, res) {
    res.json({ 'message': 'remove post temp message' });
});

module.exports = router;
