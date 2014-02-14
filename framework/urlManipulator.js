var UrlManipulator = function(){

	// returns the last part of an url:
	// if argument = "/some/path"
	// it will return "path"
	var lastNameFor = function(url){
		var parts = url.split("/");
		return parts[parts.length-1];

	};

	return {
		lastNameFor: lastNameFor
	}
}

module.exports = new UrlManipulator();