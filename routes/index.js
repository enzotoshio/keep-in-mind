Router = function(){
	return {
		routes: [],

		do: function(from, to, params){
			this.add({
				from: from,
				to: to,
				params: params
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

var gets = function(app, register, router){
	router.do("/login", "login", {title: "Keep in mind - Login"});
	router.do("/", "index", {title: "Keep in mind"});
	register(router, app.get);
}

var posts = function(app, register, router){	
	router.do("/login", "login", {title: "Keep in mind - Login"});
	register(router, app.post);
}


exports.do = function(app, register){
	gets(app, register, new Router());
	posts(app, register, new Router());
}
