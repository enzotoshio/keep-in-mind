var Card = function() {
  var containerClass = ".card-container";
  var activeArrowContainer = "arrow-container-active";

  var flip = function() {
    $(containerClass).toggleClass("flip");
  };

  var getCard = function(nextOrPrevious) {

  };

  var animateArrow = function(direction) {
    var clickedArrowClass = '.' + direction + '-arrow-container';
    $(clickedArrowClass).toggleClass(activeArrowContainer);
    setTimeout(function() {
      $(clickedArrowClass).toggleClass(activeArrowContainer);
    }, 200);
  };

  var nextCardByKey = function() {
    animateArrow('right');
  };

  var previousCardByKey = function() {
    animateArrow('left');
  };

  return {
    flip: flip,
    containerClass: containerClass,
    nextCardByKey: nextCardByKey,
    previousCardByKey: previousCardByKey,
  }
}();

var socket = io.connect(document.URL);

jQuery.fn.extend({
	socketBind: function(event, key, callback, onlyOnClick){
		$(this).on(event, callback);
		$(this).on(event, onlyOnClick);
		socket.on(key, callback);
	}
});

$(Card.containerClass).socketBind("click", "flip", function(){
    Card.flip();
}, function(){
	socket.emit("flipped");
});



//Caso detectemos incopatibilidade nos browser, trocar para este plugin: http://lab.smashup.it/flip/