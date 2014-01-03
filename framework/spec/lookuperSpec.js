var lookuper = require('../lookuper');

describe("Lookuper", function(){

	it("should only invoke 'andDo' if matching function returns true", function(done){
		
		var matching = function(fileData){
			var fileName = fileData.name;
			var fileNameLength = fileName.length;
			var controllerSufix = "Controller.js";
			var controllerSufixLength = controllerSufix.length;
			var controllerNameEnd = fileName.substring(fileNameLength - controllerSufixLength, fileNameLength);
			var matches = controllerNameEnd === controllerSufix;
			return matches;
		};

		var allFilesOk= function(files){
			for (var i = 0; i < files.length; i++) {
				var file = files[i];
				if(!matching(file))
					return false;
			}
			return true;
		};

		lookuper.findFiles({
			at: "./specResources/controllers/",
			matching: matching,
			andDo: function(files){
				var areAllFilesOk = allFilesOk(files);
				expect(areAllFilesOk).toEqual(true);
				done();
			}
		});

	});

});