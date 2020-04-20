const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', ()=> {
    document.querySelector('.nav-menu').classList.toggle('show');
})

// usando la libreria de ScrollReveal
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 300 });
ScrollReveal().reveal('.cards-banner-one', { delay: 300 });
ScrollReveal().reveal('.cards-banner-two', { delay: 300 });