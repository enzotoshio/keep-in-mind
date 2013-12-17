var fs = require('fs');

var Router = function(){
	var routes = [];

	var routeFor = function(data, controllerName, actionName){
		data.from = defaults(data.from, getRouteFor(controllerName, actionName))
		data.to = defaults(data.to, actionName);
		routes.push(data);
		console.log(routes);
	};

	var getRouteFor = function(controllerName, actionName){
		return "/"+controllerName.toLowerCase()+"/"+actionName;
	};

	var each = function(callback){
		console.log("rotas: "+routes);
		for(var i = 0; i < routes.length; i++){
			callback(routes[i]);
		}
	};

	var defaults = function(received, defaultValue){
		if(typeof received === 'undefined'){
			return defaultValue;
		}
		return received;
	};

	return {
		each : each,
		routeFor : routeFor
	}

}

var Action = function(app, controllerName, router){
	var itsGet = app.get;
	var controllerName = controllerName;

	var get = function(data, actionName, action){
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

var Controller = function(app){
	var create = function(controllerName, callback){
		callback(new Action(app, controllerName, router));
	};
	return {
		create : create
	}	
}

var ControllerManager = function(){

	var registerAll = function(app, callback){
		findControllers("./controllers", function (controllers) {
			for (var i = 0; i < controllers.length; i++) {
				var controller = controllers[i];
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
					var stats = fs.statSync(file);
					if(!stats.isDirectory())
						controllers.push(file);
				};
				callback(controllers);
			}
		})
	};

	var register = function(app, controller){
		var controllerFile = require('.'+controller);
		controllerFile.controller(new Controller(app));
	}

	return {
		registerAll: registerAll
	}

}

var router = new Router();
var controllerManager = new ControllerManager(router);

exports.do = controllerManager.do; 
exports.registerAll = controllerManager.registerAll;
exports.each = router.each;
