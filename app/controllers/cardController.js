
exports.controller = function(actions){
	this.exampleCard = actions.get("/example-card", function(actionHelper){
		console.log("acessei uma carta");

		actionHelper.listener(function(client){
			client.on("flipped", function(){
				console.log("FLIPOU")
				client.broadcast.emit("flip");
			})
		});

		actionHelper.includes({cardName : "Example"});
		actionHelper.result.view("card");
	});

	this.card = actions.get("/card/:cardName", function(actionHelper){
		actionHelper.includes(actionHelper.parameters)

		actionHelper.listener(function(client){
			client.on("flipped", function(){
				console.log("FLIPOU")
				client.broadcast.emit("flip");
			})
		});
	});
};
