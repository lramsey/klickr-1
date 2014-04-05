module.exports = app;

var express = require('express');
var cors = require('cors');
var handler = require('./lib/request-handler');

var app = express();

app.configure(function() {
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/app'));
  app.use(express.cookieParser('awesomebullets'));
  app.use(express.session());
  app.use(cors());
});

app.get('/', handler.renderIndex);
// app.get('/', util.checkUser, handler.renderIndex);

// Need to add route to handle non existent routes - Justin

// KLICKR SPECIFIC
app.get('/klicks/:id', handler.handleGetKlicks);
app.get('/klicks', handler.handleGetAllKlicks);
app.post('/klicks', handler.handlePostKlicks);

module.exports = app;