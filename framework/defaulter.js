var Defaulter = function(){

	var defaults = function(userConfiguration, defaultValue){
		var value = defaultValue;

		if(typeof userConfiguration !== "undefined" )
			value = userConfiguration;

		return value;
	}

	return {
		defaults: defaults
	}

}

module.exports = new Defaulter;