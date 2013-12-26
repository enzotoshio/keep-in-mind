
var Result = function(){
	preSetOptions = {
		nothing: function(res){
			res.send(200);
		}
	}

	var decideWhereToGo = function(res, where){
		var preSet = preSetOptions[where];
		if(typeof(preSet) !== 'undefined'){
			preSet(res);
			return;
		}

		res.render(where);

	}

	return {
		decideWhereToGo: decideWhereToGo
	}
}

module.exports = new Result();