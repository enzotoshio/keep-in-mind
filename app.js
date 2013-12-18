
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var server = http.createServer(app);
var io = require("socket.io").listen(server);
var ControllerManager = require('./framework/controller');

exports.map = function(mapCallback){
	io.on("connection", function(client){
		mapCallback(client);
	});
}

exports.bootstrap = function(){
	// all environments
	app.set('port', process.env.PORT || 3000);
	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'ejs');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.json());
	app.use(express.urlencoded());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));

	// development only
	if ('development' == app.get('env')) {
	  app.use(express.errorHandler());
	}

	var controllerManager = new ControllerManager(app);
	controllerManager.eachRoute(function(route){
		console.log('registrando rota para action: from:' + route.from + ' -> to:' + route.to);
		app.get(route.from, function(req, res){
			route.execute();
			res.render(route.to);
		});
	});

	io.enable("browser client minification");
	io.enable("browser client etag");
	io.enable("browser client gzip");
	io.set("transports", ["xhr-polling"]);
	io.set("polling duration", 10);


	server.listen(app.get('port'), function(){
	  console.log('Express server listening on port ' + app.get('port'));
	});

}
