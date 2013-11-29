function flip(){
     $('.card-container').toggleClass("flip");
}

$(document).ready(function(event) {
    Mousetrap.bind('space', flip);
    event.preventDefault();
});