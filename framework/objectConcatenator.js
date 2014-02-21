var ObjectConcatenator = function(){

	var concatenate = function(objects){
		var fullObject = {};
		for(var i in objects){
			var object = objects[i];
			add(fullObject, object);
		}
		return fullObject;
	}

	// [{usuario : {nome : "nome"}}, {usuario : {password: "password"}}] 
	// {}
	var add = function(fullObject, object){
		for(var propertyName in object){
			var propertyAlreadySet = typeof fullObject[propertyName] !== "undefined";
			if(!propertyAlreadySet)
				fullObject[propertyName] = object[propertyName];

			var hasMoreLevels = typeof fullObject[propertyName] === "object";
			if(hasMoreLevels) add(fullObject[propertyName], object[propertyName]);
		}
	}

	return {
		concatenate: concatenate
	}
}

module.exports = new ObjectConcatenator();