const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

const hamburger1 = document.querySelector('.hamburger1')
const hamburger2 = document.querySelector('.hamburger2')
const hamburger3 = document.querySelector('.hamburger3')

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    //navToggle.style.transform = 'rotate(120deg)';
    document.body.classList.toggle('no_scroll');
    if (hamburger1.style.transform === 'rotate(0deg)') {
        hamburger1.style.transform = 'rotate(45deg)  translateY(0px) translateX(5px)'; // Remove a rotação
    } else {
        hamburger1.style.transform = 'rotate(0deg)'; // Adiciona a rotação
    }

    if (hamburger2.style.display === 'none') {
        hamburger2.style.display = 'block'; // Remove a rotação
    } else {
        hamburger2.style.display = 'none';  // Adiciona a rotação
    }

    if (hamburger3.style.transform === 'rotate(0deg)') {
        hamburger3.style.transform = 'rotate(-45deg) translateY(0px) translateX(5px)'; // Remove a rotação
    } else {
        hamburger3.style.transform = 'rotate(0deg)'; // Adiciona a rotação
    }

});
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
       
        if (navLinks.classList.contains('active')) {
            
            navLinks.classList.remove('active');
            document.body.style.overflowY = 'auto';
            document.body.style.backgroundColor = 'darkslategray'
            navToggle.style.transform = 'rotate(0deg)';
        }
    });
});
