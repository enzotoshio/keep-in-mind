var mongoose = require("../framework/mongooseConnection.js").connect(); 


module.exports = mongoose.model('User', new mongose.Schema({
	login: String,
	password: String
}));
