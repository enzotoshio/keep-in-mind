function showDropdown (event, that, className) {
	var className = "." + className;

	$(className).toggleClass('active-dropdown');
	$(className).offset({
		top: $(that).offset().top * 2.5,
		left: ($(that).offset().left - ($('.dropdown').width()))
	});
	event.stopPropagation();
	event.preventDefault();
}

$(document).ready(function() {
	$('.login-button').on('click', function(event) {
		showDropdown(event, this, "registration-dropdown");
	});

	$(document).on('click', function(event) {
		if($('.active-dropdown').length > -1) {
			$('.dropdown').removeClass('active-dropdown');
			event.stopPropagation();
		}
	})
});