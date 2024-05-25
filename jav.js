/* ======================= navbar toogle icon show ========================*/

function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

/*======================== Scroll reveal =======================*/

ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', {origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .Contact form', {origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin:'left'});
ScrollReveal().reveal('.home-contact p, .about-content', {origin:'right'})

/*==================================== typed text =================*/

const typed = new Typed('.multiple-text', {
    strings: ['Backend Developer','Full stack Developer', 'Web Designer', 'App Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

/*=========================== themes ==============*/

function myfunction() {
    var element = document.body;
    element.classList.toggle("darktheme");
 }