
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function redirigirPagina(url) {
    window.location.href = url; 
}

document.querySelector('.btn-volver').addEventListener('click', scrollToTop);
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active'); 
    });
});

const navLinks = document.querySelectorAll('nav ul li a');

const currentPage = window.location.pathname.split('/').pop();

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage || (currentPage === 'index.html' && link.getAttribute('href') === '#contacto')) {
        link.classList.add('active'); 
    }
});

const contactLink = document.querySelector('nav ul li a[href="#contacto"]');
const contactSection = document.querySelector('#contacto');

new IntersectionObserver(entries => {
    contactLink.classList.toggle('active', entries[0].isIntersecting);
}, { threshold: 0.5 }).observe(contactSection);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.boton').forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault(); 
        });
    });
});

