
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var server = http.createServer(app);
var io = require("socket.io").listen(server);
var controllerManager = require('./framework/controller')(app);
var result = require('./framework/result');

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
controllerManager.eachRoute(function(action){
	var route = action.data();

	console.log('registrando rota para action: path:' + route.path + ' -> result:' + route.result);
	console.log(route);
	action.verbFunction(app).call(app, route.path, function(req, res){
		console.log(req);
		route.execute(action);

		result.decideWhereToGo(res, route.result);
		
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

exports.io = io;


