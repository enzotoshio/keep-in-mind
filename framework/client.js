
var binded = []

module.exports = function(where, callback){
	if(typeof binded[binded.indexOf(where)] === 'undefined'){
		var io = require("../app.js").io;
		io.of(where).on("connection", function(client){
			callback(client)
		});
		binded.push(where);
	}
}
