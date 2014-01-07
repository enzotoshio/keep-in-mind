var mongoose = require("mongoose");


module.exports = mongoose.model('User', new mongose.Schema({
	name: String,
	email: String,
	password: String
}));

var User = mongoose.model('User', userSchema);