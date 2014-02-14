var client = require('./client');

var ActionConfiguration = function(actionData){
	var actionData = actionData;
	
	var getData = function(){
		return actionData;
	}

	return {
		data: getData,
	}
}

module.exports = ActionConfiguration;