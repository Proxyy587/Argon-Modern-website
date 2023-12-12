const navbar = document.getElementById("navbar");
const hero = document.querySelector(".hero");

function handleScroll() {
    const scrollPosition = window.scrollY;
    const heroTop = hero.getBoundingClientRect().top + window.scrollY;

    if (scrollPosition >= heroTop) {
        navbar.classList.add('fixed-navbar');
        navbar.classList.add('fake-slide-down');
    } else {
        navbar.classList.remove('fixed-navbar');
        navbar.classList.remove('fake-slide-down');
    }
}

window.addEventListener('scroll', handleScroll);
