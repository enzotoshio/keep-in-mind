var ActionHelper = require('./actionHelper');

var ActionFactory = function(controllerName, callback){
	var get = function(data, actionName, action){
		path(data, actionName, action, "GET");
	};

	var post = function(data, actionName, action){
		path(data, actionName, action, "POST");
	};

	var path = function(data, actionName, action, verb){
		//data is optional
		actionData = data;
		if(typeof action === 'undefined'){
			action = actionName;
			actionName = data;
			actionData = {};
		}

		var defaultPath = "/"+controllerName.toLowerCase()+"/"+actionName;

		actionData.path = defaults(data.path, defaultPath);
		actionData.result = defaults(data.result, actionName);
		actionData.execute = action;
		actionData.verb = verb;

		callback(new ActionHelper(actionData));
	};


	var defaults = function(received, defaultValue){
		if(typeof received === 'undefined'){
			return defaultValue;
		}
		return received;
	};

	return {
		get: get,
		post: post
	}

}

module.exports = ActionFactory;