var express = require('express');
var app = express();
var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

var company = require('./routes/index');

app.use('/', company);

module.exports = app;