
exports.connect = function(){


	var uristring =
		process.env.MONGOLAB_URI ||
		process.env.MONGOHQ_URL ||
		'mongodb://localhost/keepinmind';

	var theport = process.env.PORT || 27017;

	mongoose.connect(uristring, function (err, res) {
	  if (err) {
		console.log ('ERROR connecting to: ' + uristring + '. ' + err);
	  } else {
	  	console.log ('Succeeded connected to: ' + uristring);
	  }
	});


}