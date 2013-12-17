var fs = require('fs');
var router = require('./router').router;

var Action = function(app, controllerName, router){
	var itsGet = app.get;
	var controllerName = controllerName;

	var get = function(data, actionName, action){
		//data is optional
		if(typeof action === 'undefined'){
			action = actionName;
			actionName = data;
			data = {};
		}

		data.action = action;
		data.verb = itsGet;
		path(data, controllerName, actionName);
	};

	var path = function(data, controllerName, actionName){
		router.routeFor(data, controllerName, actionName);
	};

	return {
		get: get
	}

}

var Controller = function(action){
	var create = function(callback){
		callback(action);
	};
	return {
		create : create
	}	
}

var ControllerManager = function(){

	var controllerSufix = "Controller.js";

	var registerAll = function(app, callback){
		findControllers("./controllers", function (controllers) {
			for (var i = 0; i < controllers.length; i++) {
				var controller = controllers[i];
				console.log('registrando: '+controller)
				register(app, controller);
			};

			router.each(callback);
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

	var register = function(app, controllerFileData){
		var controllerFile = require('.'+controllerFileData.absolute);
		var controllerName = toControllerName(controllerFileData.name);
		controllerFile.controller(new Controller(new Action(app, controllerName, router)));
	};

	var toControllerName = function(file){
		return file.substring(0, file.indexOf(controllerSufix));
	};

	return {
		registerAll: registerAll
	}

}

var controllerManager = new ControllerManager();

exports.do = controllerManager.do; 
exports.registerAll = controllerManager.registerAll;