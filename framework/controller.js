var fs = require('fs');
var router = require('./router').router;

var Action = function(app, controllerName){
	var itsGet = app.get;
	var controllerName = controllerName;
	var actionData = {};

	var get = function(data, actionName, action){
		//data is optional
		actionData = data;
		if(typeof action === 'undefined'){
			action = actionName;
			actionName = data;
			actionData = {};
		}

		var defaultFrom = "/"+controllerName.toLowerCase()+"/"+actionName;

		actionData.from = defaults(data.from, defaultFrom);
		actionData.to = defaults(data.to, actionName);
		actionData.action = action;
		actionData.verb = itsGet;

	};

	defaults = function(received, defaultValue){
		if(typeof received === 'undefined'){
			return defaultValue;
		}
		return received;
	};

	return {
		get: get,
		data: function(){
			return actionData;
		} 
	}

}

var ControllerManager = function(){

	var controllerSufix = "Controller.js";

	var registerAll = function(app, callback){
		findControllers("./controllers", function (controllers) {
			for (var i = 0; i < controllers.length; i++) {
				var controllerFileData = controllers[i];
				var action = new Action(app, controllerFileData.name);
				
				//Configuring user actions
				var controllerFile = require('.'+controllerFileData.absolute);
				controllerFile.controller(action);
				router.register(action);
			};
			callback();
		});
	};

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
		registerAll: registerAll
	}

}

exports.registerAll = new ControllerManager().registerAll;