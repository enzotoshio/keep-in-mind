var controllerManager = require('./controller');
var prettifier = require('./paramPrettifier');
var objectConcatenator = require('./objectConcatenator');
var ActionHelper = require('./actionHelper');
var Result = require('./result')
var verbFunction = function (app, verb){
	var methodsToFunctions = {"GET" : app.get, "POST" : app.post};
	return methodsToFunctions[verb];
}

module.exports = function(app){
	console.log('registrando rotas para actions:');
	controllerManager(app).eachRoute(function(actionData){
		verbFunction(app, actionData.verb).call(app, actionData.path, function(req, res){
			var allParams = objectConcatenator.concatenate([req.params, req.body, req.query]);

			actionData.parameters = prettifier.prettify(allParams);

			var actionHelper = new ActionHelper(actionData);
			actionData.execute(actionHelper);
			
			var result = new Result(actionData);
			result.goToSomewhere(res);
		});
	});
}