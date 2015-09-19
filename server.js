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

			// var options = {
			// 	url: 'https://www.audiosear.ch/api/search/shows/' + params[i],
			// 	headers: {
			// 		'User-Agent': 'request',
			// 		'Authorization': 'ffe60349cd22ef3b58af6701dd118a310d8da9608828d9174051edb670854ead'
			// 	}

			// }

			// request(options, function(error, response, body) {
			// 	console.log(error);
			audiosearch.searchEpisodes(params[i]).then(function (results) {
			  // do stuff here.
			  res.send(results);
			});


			// 	if (!error && response.statusCode == 200) {
			// 		res.send(body);
			// 	} else if(error || response.statusCode > 400) {
			// 		res.send({'error: ': body});
			// 	}
			// });
		}
	}
	// https://www.audiosear.ch/api/search/shows/comedy

	// var showIDs = {
	// 	'cool show': 0,
	// 	'another show': 1
	// }

	// res.send(showIDs);
});
