exports.controller = function(controller){
	controller.create(function(action){

		action.get({from:"/login"}, "login", function(){
			console.log('pagina de login');
		});

	});
};