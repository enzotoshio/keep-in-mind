
exports.controller = function(actions){
	actions.get({path:"/card"}, "card", function(action){
		console.log("acessei uma carta");

		action.listener(function(client){
			client.on("flipped", function(){
				console.log("FLIPOU")
				client.broadcast.emit("flip");
			})
		});
	});
};
