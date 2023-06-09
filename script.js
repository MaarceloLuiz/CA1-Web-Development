/*navigation bar style when scroll down*/
const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});

/*navigation bar style when the screen size is < 540px*/
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navigation-bar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

/*closing the menu windown when scroll down*/
window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};

/* scroll reveal style */
window.sr = ScrollReveal({reset: true});

sr.reveal('.opacity-box', {duration: 1000} );

sr.reveal('.row-of-services', {
    rotate: {x: 0, y: 50, z: 0},
    duration: 1000
});

sr.reveal('.pricing-box-container', {
    rotate: {x: 0, y: 50, z: 0},
    duration: 1000
});
