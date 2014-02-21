var UrlManipulator = function(){

	// returns the last part of an url:
	// if argument = "/some/path"
	// it will return "path"
	var lastNameFor = function(url){
		var parts = url.split("/");
		return getLastUrlPart(parts);

	};

	var getLastUrlPart = function(parts){
		for (var i = parts.length-1; i >= 0; i--) {
			var part = parts[i];
			var isAParameter = part.indexOf(":") != -1;
			if(!isAParameter) return part;
		}
	};

	return {
		lastNameFor: lastNameFor
	}
}

module.exports = new UrlManipulator();