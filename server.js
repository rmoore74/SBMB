// import required modules
var express        = require('express');
var mongooes       = require('mongoose');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// configuration
var app  = express();
var db   = require('./config/db');
var port = process.env.PORT || 8080;

// set up body-parser
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));

// set up method-override
app.use(methodOverride('X-HTTP-Method-Override'));

// set up server routes
require('./app/controller/routes')(app);

// start the server
app.listen(port);
console.log('Server running on port ' + port);

module.exports = app;
