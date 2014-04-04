module.exports = app;

var express = require('express');
var util = require('./lib/utility');
var cors = require('cors');
var handler = require('./lib/request-handler');

var app = express();
app.use(cors());

app.configure(function() {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/app'));
  app.use(express.cookieParser('awesomebullets'));
  app.use(express.session());
});

app.get('/', util.checkUser, handler.renderIndex);
app.get('/create', util.checkUser, handler.renderIndex);

// NOT NEEDED
// app.get('/links', util.checkUser, handler.fetchLinks);
// app.post('/links', handler.saveLink);

app.get('/login', handler.loginUserForm);
app.post('/login', handler.loginUser);
app.get('/logout', handler.logoutUser);

app.get('/signup', handler.signupUserForm);
app.post('/signup', handler.signupUser);

// Klickr specific
app.post('/keystrokes', handler.handlePostKeystrokes);
app.get('/keystrokes/:id,', handler.handleGetKeystrokes);

// NOT NEEDED
// app.get('/*', handler.navToLink);

module.exports = app;