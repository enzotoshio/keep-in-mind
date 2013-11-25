document.addEventListener('DOMContentLoaded', function(){
    var cardContainer = document.getElementById('card-container');

    if (cardContainer.addEventListener) {
        cardContainer.addEventListener('click', toggleClass, false);
    }else{
        cardContainer.attachEvent('onclick', toggleClass);
    }
});

function toggleClass () {
    this.classList.toggle("flip");
}

//Caso detectemos incopatibilidade nos browser, trocar para este plugin: http://lab.smashup.it/flip/