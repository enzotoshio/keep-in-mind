var express = require('express');
var engine = require('ejs-locals');
var http = require('http');
var path = require('path');

module.exports = function(app, config) {
     // all environments
    app.set('port', config.port);
    app.engine('ejs', engine);
    app.set('view engine', 'ejs');
    app.set('views', config.app.root + "/app/views");
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(config.app.root + '/public'));

    // development only
    if ('development' == app.get('env')) {
      app.use(express.errorHandler());
    }
};
