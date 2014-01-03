var ParamPrettifier = function(){

	var prettify = function(body){
		var data = {};
		for(var propertyName in body){
			appendToData(data, propertyName, body[propertyName]);
			console.log('resultado:')
			console.log(data);
			console.log('-------')
		}
		return data;
	};

// {user.name : leo}
// data.user = {}
// data.user.name = leo

// {user.card.title : fuu}
// data.user = {}
// user.card = {}
// data.user = user
// data.user.card.title = fuu

	var appendToData = function(data, propertyName, propertyValue){
		isObject = propertyName.indexOf('.')!=-1;
		console.log("property: "+propertyName);
		if(!isObject){
			data[propertyName] = propertyValue;	
			console.log("setei o valor: ");
			console.log(data);
			return
		}

		var customObject = toCustomObject(propertyName);
		initialize(data, customObject.prefix);
		console.log("era objeto");
		console.log(data);

		appendToData(data[customObject.prefix], customObject.property, propertyValue)

		// data[customObject.prefix][customObject.propertyName] = propertyValue;
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