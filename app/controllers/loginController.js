var User = require("../models/user.js");

exports.controller = function(actions){
	
	actions.get("/", function(actionHelper){
		console.log('pagina principal');
		actionHelper.result.view("home");
	});
	
	actions.post("/login", function(actionHelper){
		console.log("logando");
		console.log(actionHelper.parameters);
		actionHelper.includes(actionHelper.parameters);
		actionHelper.result.nothing();
	});

	actions.post("/signup", function(actionHelper){
		console.log("cadastrando");
		console.log(actionHelper.parameters);
		
		var myUser = new User(actionHelper.parameters.user);
		myUser.save(function(err){
			if(err)	console.log(err);
		});
		
		actionHelper.includes(actionHelper.parameters);
		actionHelper.result.nothing();
	});

};