exports.router = {
	routes : [],
	
	register: function(action){
		this.routes.push(action.data());
	},

	each : function(callback){
		for(var i = 0; i < this.routes.length; i++){
			callback(this.routes[i]);
		}
	},


}