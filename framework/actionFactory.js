var ActionConfiguration = require('./actionConfiguration');
var manipulator = require('./urlManipulator');
var defaulter = require('./defaulter');

var ActionFactory = function(controllerName, callback){
	var baseUri = function(uri){
		this.baseUri = uri;
	}

	var baseViewDir = function(dir){
		this.baseViewDir = dir;
	}

	var get = function(path, action){
		newRoute(path, action, "GET");
	};

	var post = function(path, action){
		newRoute(path, action, "POST");
	};

	var newRoute = function(path, action, verb){
		data = {};

		var baseUri = defaulter.defaults(this.baseUri, "");
		var actionName = manipulator.lastNameFor(path);

		data.path = baseUri + path;
		data.execute = action;
		data.verb = verb;
		data.view = {
			base : defaulter.defaults(this.baseViewDir, controllerName),
			name : actionName,
			full : function(){
				return this.base + "/" + this.name;
			}
		} 
		data.includes = {};

		callback(new ActionConfiguration(data));
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