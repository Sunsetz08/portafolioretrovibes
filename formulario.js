var year = 2024
var age = 21



window.addEventListener("load", () => {
    document.querySelector(".menu-btn").addEventListener("click", () => {
        document.querySelector(".nav-menu").classList.toggle("show");
    });
});

document.querySelector(".bars__menu").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
}



