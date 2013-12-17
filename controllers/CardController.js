exports.controller = function(action){

	action.get({from:"/"},"index", function(){
		console.log('index marota na /');
	});


};
