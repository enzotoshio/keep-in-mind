
exports.controller = function(actions){
	actions.get("/example-card", function(actionHelper){
		console.log("acessei uma carta");

		actionHelper.listener(function(client){
			client.on("flipped", function(){
				console.log("FLIPOU")
				client.broadcast.emit("flip");
			})
		});
	});

	actions.get("/card/:name", function(actionHelper){
		console.log(actionHelper.parameters);

		actionHelper.listener(function(client){
			client.on("flipped", function(){
				console.log("FLIPOU")
				client.broadcast.emit("flip");
			})
		});
	});
};
