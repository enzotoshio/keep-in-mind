exports.controller = function(controller){
	console.log(controller);
	controller.create("Main",function(action){
		action.get({},"index", function(){
			console.log('test funfou?');
		});
	});


};
