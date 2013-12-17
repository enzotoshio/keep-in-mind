var Router = require('./router.js').router;

exports.do = function(app, register){
	var router = new Router(app);
	router.get("/login", "login", {title: "Keep in mind - Login"});
	router.get("/", "index", {title: "Keep in mind"});
	router.post("/login", "login", {title: "Keep in mind - Login"});
	register(router);

}
