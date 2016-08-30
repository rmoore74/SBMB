// import required modules
var express        = require('express');
var mongoose       = require('mongoose');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// configuration
var app  = express();
var port = process.env.PORT || 8080;

// connect mongodb
mongoose.connect('mongodb://localhost:27017/sbmb');

// set up mongoose models
require('./app/model/post.model');
require('./app/model/user.model');

// set up body-parser
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));

// set up method-override
app.use(methodOverride('X-HTTP-Method-Override'));

// set up api routes
app.use('/api', require('./app/api/admin.api'));
app.use('/api/posts', require('./app/api/posts.api'));

// set up server routes
require('./app/controller/routes')(app);

// start the server
app.listen(port);
console.log('Server running on port ' + port);

module.exports = app;
