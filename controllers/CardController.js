exports.controller = function(controller){
	controller.create(function(action){

		action.get({from:"/"},"index", function(){
			console.log('index marota na /');
		});

	});

};
