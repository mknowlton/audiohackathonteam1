var express = require('express');
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var session = require('express-session');
var request = require('request');

require('dotenv').load();

var AudioSearch = require('./audiosearch/index');
var audiosearch = new AudioSearch(process.env.AUDIOSEARCH_APP_ID, process.env.AUDIOSEARCH_SECRET);

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


// example query: server/categories?cat1=comedy&cat2=drama
app.get('/categories', function(req, res) {
	var params = req.query;

	for (var i in params) {

		// check if it is a category
		if (i.indexOf('cat') > -1) {
			audiosearch.searchEpisodes(params[i]).then(function (results) {
				res.send(results);
			});
		}
	}
});

// Audiosearch.prototype.searchShows = function (queryString, params) {
//   return this.get('/search/shows/'+encodeURI(queryString), params);
// };

app.get('/similarshowsbyname', function(req, res) {
	var params = req.query;
	console.log(params);
	for (var i in params) {
		// check if it is a category
		if (i.indexOf('show') > -1) {
			var show = params[i];
			audiosearch.get('/search/shows/' + encodeURI(params[i]) ).then(function (results) {
				res.send(results);
			});
		}
	}
});