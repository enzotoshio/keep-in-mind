var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require("socket.io").listen(server);
var config = require('./config/config');


require('./config/express')(app, config);
require('./config/socketio')(io, config);
require('./config/mongoose')(config);
require('./framework/config')(app);

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

exports.io = io;