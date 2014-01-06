
exports.controller = function(actions){

	actions.get({path:"/"}, "home", function(){
		console.log('pagina principal');
	});
	
	actions.post({path:"/signin"}, "signin", function(actionHelper){
		console.log("logando");
		console.log(actionHelper.parameters);
		actionHelper.result.nothing();
	});
	
};