//preloader -------------------------------------
const loader = document.getElementById('preloader');

if (loader) {
    window.onload = function () {
        loader.classList.add('loaderpre');
    }
}
//preloader -------------------------------------

//Mobile navbar toggler ---------------------------
const navbarToggler = document.getElementById('navbar-toggler');
const navbarMenu = document.getElementById('navbarMenu');

if (navbarToggler && navbarMenu) {
    navbarToggler.addEventListener('click', function () {
        navbarMenu.classList.toggle('hidden');
        navbarMenu.classList.toggle('block');
        // Toggle menu-open on header for pill radius fix when scrolled
        document.querySelector('header').classList.toggle('menu-open');
    });
}
//Mobile navbar toggler ---------------------------


//Text loader --------------------------------------
const typed = new Typed('.multiple_text',{
    strings: ['Web Developer','PHP Developer', 'Web Designer','Laravel Developer'],
    typeSpeed: 80,
    backSpeed:80,
    backDelay:1200,
    loop: true,
});
//Text loader --------------------------------------

// Projects Carousel Slider ------------------------
document.addEventListener('DOMContentLoaded', function () {
    const track = document.getElementById('project-track');
    const prevBtn = document.getElementById('project-prev');
    const nextBtn = document.getElementById('project-next');
    
    if (track && prevBtn && nextBtn) {
        const cards = Array.from(track.children);
        let currentIndex = 0;
        
        function getCardsPerPage() {
            if (window.innerWidth >= 1024) return 3;
            if (window.innerWidth >= 640) return 2;
            return 1;
        }
        
        function updateCarousel() {
            const cardsPerPage = getCardsPerPage();
            const maxIndex = Math.max(0, cards.length - cardsPerPage);
            
            if (currentIndex > maxIndex) currentIndex = maxIndex;
            if (currentIndex < 0) currentIndex = 0;
            
            const offset = currentIndex * (100 / cardsPerPage);
            track.style.transform = `translateX(-${offset}%)`;
            
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= maxIndex;
        }
        
        prevBtn.addEventListener('click', () => {
            currentIndex--;
            updateCarousel();
        });
        
        nextBtn.addEventListener('click', () => {
            currentIndex++;
            updateCarousel();
        });
        
        window.addEventListener('resize', updateCarousel);
        updateCarousel();
    }
});


// Floating Compact Navbar — Scroll Effect ---
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (!header) return;
    if (window.scrollY > 80) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});
// Floating Compact Navbar — Scroll Effect ---
