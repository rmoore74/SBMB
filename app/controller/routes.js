var path = require('path');

module.exports = function(app) {
    
    app.get('/', function(req, res) {
        res.send('sending something.');
    });

}
