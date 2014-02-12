var prettifier = require('../paramPrettifier');

describe("ParamPrettifier", function(){

	it("should convert one level property to object", function(done){
		var body = {'user.name' : 'leo'};
		var data = prettifier.prettify(body);
		expect(data).toEqual({user : {name : 'leo'}});
		done();
	});

	it("should convert two times one level property  to object", function(done){
		var body = {'user.name' : 'enzo', 'user.email' : 'enzo@enzo.com'};
		var data = prettifier.prettify(body);
		expect(data).toEqual({user : {name : 'enzo', email :'enzo@enzo.com'}});
		done();
	});

	it("should be equal to body if there are no objects to be converted", function(done){
		var body = {'name' : 'enzo'};
		var data = prettifier.prettify(body);
		expect(data).toEqual(body);
		done();
	});

	it("should convert two levels property to objects", function(done){
		var body = {'deck.card.title' : 'somecard'};
		var data = prettifier.prettify(body);
		expect(data).toEqual({deck : {card : {title : 'somecard'}}});
		done();
	});

	it("should convert two objects", function(done){
		var body = {'card.title' : 'somecard', 'user.name' : 'leo'};
		var data = prettifier.prettify(body);
		expect(data).toEqual({card : {title : 'somecard'}, user : {name : 'leo'}});
		done();
	});

	it("should convert two objects of different levels", function(done){
		var body = {'card.title' : 'somecard', 'name' : 'leo'};
		var data = prettifier.prettify(body);
		expect(data).toEqual({card : {title : 'somecard'}, name : 'leo'});
		done();
	});

	it("should convert two objects of different levels", function(done){
		var body = {'deck.card.title' : 'somecard', 'user.name' : 'leo'};
		var data = prettifier.prettify(body);
		expect(data).toEqual({deck : {card : {title : 'somecard'}}, user : {name : 'leo'}});
		done();
	});

	it("should do nothing if body is empty", function(done){
		var body = {};
		var data = prettifier.prettify(body);
		expect(data).toEqual(body);
		done();
	});

});