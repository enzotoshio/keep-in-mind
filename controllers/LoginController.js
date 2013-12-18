exports.controller = function(action){

	action.get({from:"/"}, "login", function(){
		console.log('pagina de login');
	});
	
};