Router = function(app){
	return {
		routes: [],

		get: function(from, to, params){
			this.do(from, to, params, app.get)
		},

		post: function(from, to, params){
			this.do(from, to, params, app.post)
		},

		do: function(from, to, params, verb){
			this.add({
				from: from,
				to: to,
				params: params,
				verb: verb
			})
		},

		add: function(route){
			this.routes.push(route);
		},

		each: function(callback){
			for(var i = 0; i < this.routes.length; i++){
				callback(this.routes[i]);
			}
		}
	}
};

exports.do = function(app, register){
	var router = new Router(app);
	router.get("/login", "login", {title: "Keep in mind - Login"});
	router.get("/", "index", {title: "Keep in mind"});
	router.post("/login", "login", {title: "Keep in mind - Login"});
	register(router);

}
