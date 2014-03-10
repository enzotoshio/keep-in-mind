var client = require('./client');

var ActionHelper = function(actionData){

	return {
		listener: function(callback){
			client(actionData.path, callback);
		},

		includes: function(data){
			actionData.includes = data;
		},

		parameters: actionData.parameters,
		
		result: {
			nothing : function(){
				actionData.view.name = "nothing";
			},
			view : function(view){

				if(typeof view !== 'object'){
					actionData.view.name = view;
					return;
				}

				actionData.view.name = view.path;
				if(typeof view.controller !== 'undefined')
					actionData.view.base = view.controller;

			}
		}

	}

}

module.exports = ActionHelper;