exports.controller = function(action){

	action.get({from:"/login"}, "login", function(){
		console.log('pagina de login');
	});
	
};