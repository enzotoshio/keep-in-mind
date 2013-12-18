exports.controller = function(action){

	action.get({path:"/"}, "login", function(){
		console.log('pagina de login');
	});
	
	action.post({path:"/login"}, "login", function(){
		console.log('pagina de login');
	});
	
};