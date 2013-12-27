
var binded = []

module.exports = function(where, callback){
	var notBindedYet = typeof binded[binded.indexOf(where)] === 'undefined';
	if(notBindedYet){
		var io = require("../app.js").io;
		io.of(where).on("connection", function(client){
			callback(client)
		});
		binded.push(where);
	}
}
