var fs = require('fs');
var Lookuper = function(){

	var findFiles = function(data){
		var root = data.at,
			matches = data.matching,
			callback = data.andDo;
		fs.readdir(root, function(err, data){
			var controllers = [];
			if(typeof data !== 'undefined'){
				for (var i = 0; i < data.length; i++) {
					var file = root + "/" +data[i];
					var fileData = {name: data[i], absolute: file}
					fileData.stats = fs.statSync(fileData.absolute);
					if(matches(fileData)){
						controllers.push(fileData);		
					}
				};	
				
			}
			callback(controllers);
		})
	};

	return {
		findFiles: findFiles
	}
}

module.exports = new Lookuper();