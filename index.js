var app = require("./app");
app.bootstrap();

app.map(function(client){
	client.on("flipped", function(){
		client.broadcast.emit("flip");
	});
})
