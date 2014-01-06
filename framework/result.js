
var Result = function(){
	preSetOptions = {
		nothing: function(res){
			res.send(200);
		}
	}

	var goToSomewhere = function(res, where, data){
		var preSet = preSetOptions[where];
		if(typeof(preSet) !== 'undefined'){
			preSet(res);
			return;
		}

		res.render(where, data);

	}

	return {
		goToSomewhere: goToSomewhere
	}
}

module.exports = new Result();