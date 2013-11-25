var socket = io.connect(document.URL);

jQuery.fn.extend({
	socketBind: function(event, key, callback, onlyOnClick){
		$(this).on(event, callback);
		$(this).on(event, onlyOnClick);
		socket.on(key, callback);
	}
});

$('.card-container').socketBind("click", "flip", function(){
    $('.card-container').toggleClass("flip");
	console.log('flipei');
}, function(){
	socket.emit("send-flip");
});



//Caso detectemos incopatibilidade nos browser, trocar para este plugin: http://lab.smashup.it/flip/