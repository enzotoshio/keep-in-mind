$(document).ready(function() {
    Mousetrap.bind('space', Card.flip);
    Mousetrap.bind('right', Card.nextCardByKey);
    Mousetrap.bind('left', Card.previousCardByKey);
});