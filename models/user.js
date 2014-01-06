var mongoose = require("../framework/mongooseConnection.js").connect(); 


module.exports = mongoose.model('User', new mongose.Schema({
	name: String,
	email: String,
	password: String
}));


