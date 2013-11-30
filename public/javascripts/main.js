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

	$('body').on('click', function(event) {
		event.stopPropagation();
		var dropdownContainer = $('.active-dropdown');
		var dropdownContainerChildren = $('.active-dropdown *');
		if(dropdownContainer.length > -1 && !dropdownContainer.is(event.target) && !dropdownContainerChildren.is(event.target)) {
			$('.dropdown').removeClass('active-dropdown');
		}
	})
});