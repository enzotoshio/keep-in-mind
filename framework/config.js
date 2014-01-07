var controllerManager = require('./controller');
var prettifier = require('./paramPrettifier');
var result = require('./result');

module.exports = function(app){
	controllerManager(app).eachRoute(function(action){
		var route = action.data();

		console.log('registrando rota para action: path:' + route.path + ' -> result:' + route.result);
		console.log(route);
		action.verbFunction(app).call(app, route.path, function(req, res){
			action.parameters = prettifier.prettify(req.body); 
			route.execute(action);

			result.goToSomewhere(res, route.result, route.includes);
			
		});
	});
}