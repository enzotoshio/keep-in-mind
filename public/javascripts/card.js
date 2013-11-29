var Card = function() {
	var containerClass = ".card-container";
	var activeArrowContainer = "arrow-container-active";

	$(containerClass).socket({
		on: "click",
		send: "flip",
		andDo: function(){
			$(containerClass).toggleClass("flip");
		},
		onlyOnClick: function(){
			EasySocket().emit("flipped");
		}
	});

	var flip = function() {
		$(containerClass).click();
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