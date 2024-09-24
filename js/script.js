//preloader -------------------------------------
const loader = document.getElementById('preloader');

window.onload = function () {
    loader.classList.add('loaderpre');
}

//preloader -------------------------------------

//Text loader --------------------------------------
const typed = new Typed('.multiple_text',{
    strings: ['Web Developer','Frontend Developer', 'Web Designer'],
    typeSpeed: 80,
    backSpeed:80,
    backDelay:1200,
    loop: true,

  });

//Text loader --------------------------------------
