var utils = require('../controller');

describe("Controller Manager", function(){

	it("should invert string hello", function(done){
		expect(utils.invert("hello")).toEqual("olleh");
		done();
	});

	it("should invert string 'testing string utils'", function(done){
		expect(utils.invert("testing string utils")).toEqual("slitu gnirts gnitset");
		done();
	});

	it("should convert 'hello' to upper case ", function(done){
		expect(utils.toUpper("hello")).toEqual("HELLO");
		done();
	});

	it("should convert 'testing string utils' to upper case", function(done){
		expect(utils.toUpper("testing string utils")).toEqual("TESTING STRING UTILS");
		done();
	});


});