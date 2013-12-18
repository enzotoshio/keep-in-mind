var fs = require('fs');
var client = require('./client');

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
		actionData.ejs = defaults(data.ejs, actionName);
		actionData.execute = action;
		actionData.verb = verb;

		callback(new Action(actionData));
	}

	var listener = function(callback){
		client(actionData.path, callback);
	}

	var defaults = function(received, defaultValue){
		if(typeof received === 'undefined'){
			return defaultValue;
		}
		return received;
	};

	return {
		get: get,
		post: post,
		listener: listener
	}

}

var Action = function(actionData){
	var actionData = actionData;
	
	var verbFunction = function(app){
		var methodsToFunctions = {"GET" : app.get, "POST" : app.post};
		return methodsToFunctions[actionData.verb];
	};

	return {
		data: function(){
			return actionData;
		},
		verbFunction: verbFunction
	}

}

var ControllerManager = function(){
	var controllerSufix = "Controller.js";

	var eachRoute = function(callback){
		findControllers("./controllers", function (controllers) {
			buildRoutes(controllers, callback);
		});
	};

	var buildRoutes = function(controllers, callback){
		var routes = [];
		for (var i = 0; i < controllers.length; i++) {
			var controllerFileData = controllers[i];
			
			//Configuring user actions
			var action = new ActionFactory(controllerFileData.name, callback);
			var controllerFile = require('.'+controllerFileData.absolute);
			controllerFile.controller(action);
		};
	}

	var findControllers = function(root, callback){
		fs.readdir(root, function(err, data){
			if(typeof data !== 'undefined'){
				var controllers = [];
				for (var i = 0; i < data.length; i++) {
					var file = root + "/" +data[i];
					var fileData = {name: data[i], absolute: file}
					
					var stats = fs.statSync(file);
					if(!stats.isDirectory() && isController(fileData.name))
						controllers.push(fileData);
				};	
				callback(controllers);
			}
		})
	};

	var isController = function(controller){
		return controller.indexOf(controllerSufix, controller.length - controllerSufix.length) !== -1;
	};

	var toControllerName = function(file){
		return file.substring(0, file.indexOf(controllerSufix));
	};

	return {
		eachRoute: eachRoute
	}

}

module.exports = ControllerManager;