var fs = require('fs');
var ActionFactory = require('./actionFactory'); 
var lookuper = require('./lookuper'); 

var ControllerManager = function(){
	var controllerSufix = "Controller.js";

	var eachRoute = function(callback){
		lookuper.findFiles({
			at: './app/controllers',
			matching: function(fileData){
				return !fileData.stats.isDirectory() && isController(fileData.name);
			},
			andDo: function(controllers) {
				configureActions(controllers, callback);
			}
		});
	};

	var configureActions = function(controllers, callback){
		for (var i = 0; i < controllers.length; i++) {
			var controllerFileData = controllers[i];
			var controllerName = toControllerName(controllerFileData.name);
			var action = new ActionFactory(controllerName);
			
			//This call the controller exported by the user
			var controllerFile = require('.'+controllerFileData.absolute);
			var controller = new controllerFile.controller(action); 
			for(property in controller){
				var action = controller[property];
				action.view.name = property;
				callback(action);
			}

		};
	}

	var isController = function(controller){
		var lastPartOfControllerName = controller.substring(controller.length - controllerSufix.length, controller.length);
		return lastPartOfControllerName === controllerSufix;
	};

	var toControllerName = function(file){
		return file.substring(0, file.indexOf(controllerSufix));
	};

	return {
		eachRoute: eachRoute
	}

}

module.exports = function(app){
	return new ControllerManager(app);
}