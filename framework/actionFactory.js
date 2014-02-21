var ActionConfiguration = require('./actionConfiguration');
var defaulter = require('./defaulter');

var ActionFactory = function(controllerName){
	var baseUri = function(uri){
		this.baseUri = uri;
	}

	var baseViewDir = function(dir){
		this.baseViewDir = dir;
	}

	var get = function(path, action){
		return newRoute(path, action, "GET");
	};

	var post = function(path, action){
		return newRoute(path, action, "POST");
	};

	var newRoute = function(path, action, verb){
		data = {};

		var baseUri = defaulter.defaults(this.baseUri, "");

		data.path = baseUri + path;
		data.execute = action;
		data.verb = verb;
		data.view = {
			base : defaulter.defaults(this.baseViewDir, controllerName),
			full : function(){
				return this.base + "/" + this.name;
			}
		} 
		data.includes = {};

		return data;
	};


	return {
		get: get,
		post: post,
		base: function(data){
			baseViewDir = data.baseViewDir,
			baseUri = data.baseUri
		},
	}

}

module.exports = ActionFactory;