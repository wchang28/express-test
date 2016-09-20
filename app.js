var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser.json());

app.get('/greeting', function(req, res) {
	res.json({message: 'Hi! How are you?'});
});

app.use('/bower_components', express.static(path.join(__dirname, './bower_components')));
app.use('/', express.static(path.join(__dirname, './public')));

var server = http.createServer(app);

var host = (process.env['TEST_HOST'] ? process.env['TEST_HOST'] : '0.0.0.0');
var port = (process.env['TEST_PORT'] ? parseInt(process.env['TEST_PORT']) : 14848);

server.listen(port, host, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('server is running at ' + host + ':' + port.toString());
});