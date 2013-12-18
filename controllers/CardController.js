
exports.controller = function(action){
	action.get({path:"/card"}, "card", function(){
		console.log("acessei uma carta");

		action.listener(function(client){
			client.on("flipped", function(){
				console.log("FLIPOU")
				client.broadcast.emit("flip");
			})
		});
	});
};
