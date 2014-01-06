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

	var result = { 
		nothing: function(){
			actionData.result = "nothing";
		}
	};
	
	var includes = function(data){
		actionData.includes = data;
	}

	return {
		data: function(){
			return actionData;
		},
		listener: listener,
		verbFunction: verbFunction,
		result: result,
		includes: includes
	}

}

module.exports = ActionHelper;