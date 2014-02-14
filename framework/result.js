
var Result = function(actionData){
	var preSetOptions = {
		nothing: function(res){
			res.send(200);
		}
	};

	var goToSomewhere = function(res){
		var baseDir = actionData.view.base;
		var viewName = actionData.view.name;

		var preSet = preSetOptions[viewName];
		if(typeof(preSet) !== 'undefined'){
			preSet(res);
			return;
		}
		res.render(actionData.view.full(), actionData.includes);
	}

	return {
		goToSomewhere: goToSomewhere
	}
}

module.exports = Result;