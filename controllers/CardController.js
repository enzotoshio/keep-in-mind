exports.controller = function(action){

	action.get({from:"/card"}, "card", function(){
		console.log("acessei uma carta");
	});


};
