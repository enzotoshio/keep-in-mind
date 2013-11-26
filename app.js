
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

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

routes.do(app, function(router, verb){
	router.each(function(route){
		verb.call(app, route.from, function(req, res){
			res.render(route.to, route.params);
		});
	});
});


var server = http.createServer(app);
var io = require("socket.io").listen(server);

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

io.on("connection", function(client){
	client.on("send-flip", function(){
		client.broadcast.emit("flip");
	});
});