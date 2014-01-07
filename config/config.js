
var path = require('path'),
    env = process.env.NODE_ENV || 'development';

var app ={
  name: 'Keep in Mind',
  root: path.normalize(__dirname + '/..'),
}

var config = {
  development: {
    app: app,
    port: 3000,
    db: 'mongodb://localhost/kim-development'
  },

  test: {
    app: app,
    port: 3000,
    db: 'mongodb://localhost/kim-test'
  },

  production: {
    app: app,
    port: process.env.PORT,
    db: 'mongodb://localhost/kim-production'
  }
};

module.exports = config[env];
