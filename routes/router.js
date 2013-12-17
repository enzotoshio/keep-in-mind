exports.router = function(app){
	var routes = [];
	var get = function(from, to, params){
		path(from, to, params, app.get);
	};

	var post = function(from, to, params){
		path(from, to, params, app.post);
	};

	var path = function(from, to, params, verb){
		add({
			from: from,
			to: to,
			params: params,
			verb: verb
		});
	};

	var add = function(route){
		routes.push(route);
	};

	var each = function(callback){
		for(var i = 0; i < routes.length; i++){
			callback(routes[i]);
		}
	};

	return {
		get: get,
		post: post,
		each: each
	}
};
