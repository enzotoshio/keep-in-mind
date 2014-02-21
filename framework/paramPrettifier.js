var ParamPrettifier = function(){

	var prettify = function(body){
		var data = {};
		for(var propertyName in body){
			appendToData(data, propertyName, body[propertyName]);
		}
		return data;
	};

	var appendToData = function(data, propertyName, propertyValue){
		isObject = propertyName.indexOf('.')!=-1;
		if(!isObject){
			data[propertyName] = propertyValue;	
			return
		}

		var customObject = toCustomObject(propertyName);
		initialize(data, customObject.prefix);

		appendToData(data[customObject.prefix], customObject.property, propertyValue)
	}

	var toCustomObject = function(property){
		var prefix = property.substring(0, property.indexOf("."));
		var property = property.substring(property.indexOf(".")+1, property.length);
		return {prefix : prefix, property : property};
	};

	var initialize = function(data, property){
		if(typeof(data[property]) === 'undefined')
			data[property] = {};
	};

	return {
		prettify: prettify
	}
}

module.exports = new ParamPrettifier();