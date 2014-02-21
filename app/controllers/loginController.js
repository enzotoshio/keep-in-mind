var User = require("../models/user.js");

exports.controller = function(actions){
	
	this.index = actions.get("/", function(actionHelper){
		console.log('pagina principal');
		actionHelper.result.view("home");
	});
	
	this.login = actions.post("/login", function(actionHelper){
		console.log("logando");
		console.log(actionHelper.parameters);
		actionHelper.includes(actionHelper.parameters);
		actionHelper.result.nothing();
	});

	this.signup = actions.post("/signup", function(actionHelper){
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