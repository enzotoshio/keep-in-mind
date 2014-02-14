var manipulator = require('../urlManipulator');

describe("UrlManipulator", function(){

	it("should remove the bar", function(done){
		var lastName = manipulator.lastNameFor("/myUrl");
		expect(lastName).toEqual("myUrl");
		done();
	});

	it("should ignore the first level", function(done){
		var lastName = manipulator.lastNameFor("/other/myUrl");
		expect(lastName).toEqual("myUrl");
		done();
	});

	it("should get the last level always", function(done){
		var lastName = manipulator.lastNameFor("/other/myUrl/oh/my/god/so/much/levels");
		expect(lastName).toEqual("levels");
		done();
	});

});