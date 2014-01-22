exports.controller = function(actions){
	var mongoose = require("mongoose");

	actions.get({path:"/"}, "home", function(){
		console.log('pagina principal');
	});
	
	actions.post({path:"/login"}, "login", function(actionHelper){
		console.log("logando");
		console.log(actionHelper.parameters);
		actionHelper.includes(actionHelper.parameters);
		actionHelper.result.nothing();
	});

	actions.post({path:"/signup"}, "signup", function(actionHelper){
		console.log("cadastrando");
		console.log(actionHelper.parameters);
		actionHelper.includes(actionHelper.parameters);
		actionHelper.result.nothing();
	});

};