var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require("socket.io").listen(server);
var config = require('./config/config');
var mongoose = require ("mongoose");


require('./config/express')(app, config);
require('./config/socketio')(io, config);
require('./framework/config')(app);
bootstrap(config);

function bootstrap(config){
	var uriString = config.db;
	mongoose.connect(uriString, function (err, res) {
		if (err) throw err;

		server.listen(app.get('port'), function(){
		  console.log('Express server listening on port ' + app.get('port'));
		});

	  	console.log ('Succeeded connected to: ' + uriString);
	});
}

exports.io = io;