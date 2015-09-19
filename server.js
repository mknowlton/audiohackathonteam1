var express = require('express');
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var session = require('express-session');

var port = 8000;
var app = express();

app.use(express.static('public'));
app.set('views', __dirname + '/public/views')
app.set('view engine', 'jade');
app.use(express.static('public'));

// require('./server/routes.js');

app.listen(port, function(err) {
	console.log('Running on port ' + port);
});

app.get('/', function(req, res) {
	res.sendFile('index.html');
});
