var EasySocket = function(){
	var socket = io.connect(document.URL);
	
	var on = function(key, callback){
		socket.on(key, callback);
	};

	var emit = function(key, data){
		socket.emit(key, data);
	};
	
	return {
		on: on,
		emit: emit
	}
}

jQuery.fn.extend({
	socket: function(data){
		var event = data.on,
			key = data.send,
		 	callback = data.andDo,
		 	onlyOnClick = data.onlyOnClick;
		$(this).on(event, callback);
		$(this).on(event, onlyOnClick);
		EasySocket().on(key, callback);
	}
});

