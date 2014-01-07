
exports.controller = function(actions){
	actions.get({path:"/card"}, "card", function(actionHelper){
		console.log("acessei uma carta");

		actionHelper.listener(function(client){
			client.on("flipped", function(){
				console.log("FLIPOU")
				client.broadcast.emit("flip");
			})
		});
	});
};
