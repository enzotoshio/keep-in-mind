var client = require('./client');
var ActionHelper = function(actionData){
	var actionData = actionData;
	
	var verbFunction = function(app){
		var methodsToFunctions = {"GET" : app.get, "POST" : app.post};
		return methodsToFunctions[actionData.verb];
	};

	var listener = function(callback){
		client(actionData.path, callback);
	};

	var result = function(where){
		actionData.result = where;
	};

	return {
		data: function(){
			return actionData;
		},
		listener: listener,
		verbFunction: verbFunction,
		result: result
	}

}

module.exports = ActionHelper;