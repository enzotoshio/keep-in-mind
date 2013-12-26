
exports.controller = function(actions){

	actions.get({path:"/"}, "home", function(){
		console.log('pagina principal');
	});
	
	actions.post({path:"/signin"}, "signin", function(actionHelper, data){
		console.log("cadastra");
		console.log(data);
		actionHelper.result("nothing");
	});
	
};