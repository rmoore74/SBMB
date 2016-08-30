var express = require('express');
var router  = express.Router();

router.get('/authenticate', function(req, res) {
    res.json({ 'message': 'this is a temporary message' });
});

module.exports = router;
