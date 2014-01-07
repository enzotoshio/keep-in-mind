var mongoose = require ("mongoose");

module.exports = function(config){
	var uristring = config.db;
	mongoose.connect(uristring, function (err, res) {
	  if (err) {
		console.log ('ERROR connecting to: ' + uristring + '. ' + err);
	  } else {
	  	console.log ('Succeeded connected to: ' + uristring);
	  }
	});
}