var objectConcatenator = require('../objectConcatenator');

describe("ObjectConcatenator", function(){

	it("should unify two objects", function(done){
		var newObject = objectConcatenator.concatenate([{name : "name"}, {idade : 18}]);
		expect(newObject).toEqual({name: "name", idade: 18});
		done();
	});

	it("should unify many objects", function(done){
		var newObject = objectConcatenator.concatenate([{name : "name"}, {idade : 18}, {email : "l"}]);
		expect(newObject).toEqual({name: "name", idade: 18, email : "l"});
		done();
	});

	it("should return that same object", function(done){
		var newObject = objectConcatenator.concatenate([{name : "name"}]);
		expect(newObject).toEqual({name: "name"});
		done();
	});

	it("should unify two nested objects with the same key", function(done){
		var newObject = objectConcatenator.concatenate([{user : {name : "name"}}, {user : {password: "password"}}]);
		expect(newObject).toEqual({user: {name: "name", password : "password"}});
		done();
	});

	it("should unify three nested objects with the same key", function(done){
		var userName = {user : {name : "name"}};
		var userPassword = {user : {password: "password"}};
		var userAddress = {user : {address : { city : "São Paulo", state : "SP"}}};
		var newObject = objectConcatenator.concatenate([userName, userPassword, userAddress]);

		expect(newObject).toEqual({user: {name: "name", password : "password", address: {city : "São Paulo", state: "SP"}}});
		done();
	});

	it("should unify two nested objects with the same key and many properties", function(done){
		var publicInfos = {user : {name : "leo", address : { city : "São Paulo", state : "SP"}}};
		var privateInfos = {user : {password : "12345"}};

		var newObject = objectConcatenator.concatenate([publicInfos, privateInfos]);
		expect(newObject).toEqual({user: {name: "leo", address: { city : "São Paulo", state: "SP"}, password : "12345"}});
		done();
	});

	it("should unify two nested objects with the same key and 3 nested levels", function(done){
		var publicInfos = {user : {infos : {name : "leo", address : { city : "São Paulo", state : "SP"}}}};
		var privateInfos = {user : {infos : {password : "12345"}}};

		var newObject = objectConcatenator.concatenate([publicInfos, privateInfos]);
		expect(newObject).toEqual({user: {infos : {name: "leo", address: { city : "São Paulo", state: "SP"}, password : "12345"}}});
		done();
	});

	it("should unify two nested objects with the different keys", function(done){
		var publicInfos = {userPublic : {name : "leo", address : { city : "São Paulo", state : "SP"}}};
		var privateInfos = {userPrivate : {password : "12345"}};

		var newObject = objectConcatenator.concatenate([publicInfos, privateInfos]);
		expect(newObject).toEqual({userPublic: {name: "leo", address: { city : "São Paulo", state: "SP"}}, userPrivate: { password : "12345"}});
		done();
	});

});