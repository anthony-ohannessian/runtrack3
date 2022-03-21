document.addEventListener('DOMContentLoaded', function loaded() {

    var buttonBurger = document.getElementsByClassName('burger-icon');
    var buttonNav = buttonBurger[0];
    var nav = document.querySelector('nav');
    
    buttonNav.addEventListener("click", function(){
        nav.classList.toggle("open");
        });
})