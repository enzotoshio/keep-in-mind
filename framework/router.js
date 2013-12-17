exports.router = {
	routes : [],
	
	routeFor : function(data, controllerName, actionName){
		var defaultFrom = "/"+controllerName.toLowerCase()+"/"+actionName;
		data.from = this.defaults(data.from, defaultFrom);
		data.to = this.defaults(data.to, actionName);

		console.log("registrando rota: "+ data.from + " -> " + data.to);
		this.routes.push(data);
	},

	each : function(callback){
		for(var i = 0; i < this.routes.length; i++){
			callback(this.routes[i]);
		}
	},

	defaults : function(received, defaultValue){
		if(typeof received === 'undefined'){
			return defaultValue;
		}
		return received;
	}

}