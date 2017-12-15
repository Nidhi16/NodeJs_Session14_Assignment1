// Load the required modules
var express = require('express');
var app = express();
var path = require('path');

// set the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

// require the router
var company = require('./routes/index');

// use the router
app.use('/', company);

// export app object
module.exports = app;