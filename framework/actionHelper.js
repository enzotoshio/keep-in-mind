var client = require('./client');

var ActionHelper = function(actionData){

	return {
		listener: function(callback){
			client(actionData.path, callback);
		},

		includes: function(data){
			actionData.includes.push(data);
		},

		parameters: actionData.parameters,
		
		result: {
			nothing : function(){
				actionData.view.name = "nothing";
			},
			view : function(view){
				actionData.view.name = view;
			}
		},

	}

}

module.exports = ActionHelper;