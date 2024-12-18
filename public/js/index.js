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




/* JavaScript */
// Duplica as imagens para criar o efeito infinito
const track = document.querySelector('.slider-track');
const slides = [...document.querySelectorAll('.slider')];

// Clona os slides e adiciona ao final
slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    track.appendChild(clone);
});

// Opcional: Ajusta a velocidade baseado na largura da tela
function adjustSpeed() {
    const track = document.querySelector('.slider-track');
    const windowWidth = window.innerWidth;
    
    // Ajusta a duração da animação baseado na largura da tela
    const duration = windowWidth < 768 ? '20s' : '30s';
    track.style.animationDuration = duration;
}

// Chama quando a página carrega e quando redimensiona
window.addEventListener('load', adjustSpeed);
window.addEventListener('resize', adjustSpeed);

  
  


document.querySelectorAll('.btn-question').forEach(button => {
  button.addEventListener('click', () => {
      const answer = button.nextElementSibling; // Resposta correspondente

      // Verifica se a resposta já está ativa e alterna a classe
      const isActive = answer.classList.contains('active');
      closeAllAnswers(); // Fecha todas antes de abrir a nova

      if (!isActive) {
          answer.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px'; // Expande
      }
  });
});

function closeAllAnswers() {
  document.querySelectorAll('.faq-answer').forEach(answer => {
      answer.classList.remove('active');
      answer.style.maxHeight = null; // Reseta a altura para o padrão
  });
}



//--------------------------------------------------------------------
gsap.registerPlugin(ScrollTrigger);




gsap.to('.sobre-text i',{
  x:0,
  opacity:1,
  duration:.5,
  scrollTrigger:{
    trigger:'.sobre-container',
    start:'top center'
  }
})


gsap.to('.sobre-text',{
  y:50,
  scrollTrigger:{
    trigger:'.sobre-container',
    start:'top center',
    end:'bottom top',
    scrub:2
  }
})

gsap.to('.text',{
  scale:1.5,
  scrollTrigger:{
    trigger:'.text',
    start:'top bottom',
    end:'bottom top',
    scrub:2
  }
})



gsap.to(".animated-arte", {
  y: 0,  // Sobe para a posição original
  duration: 1,  // Duração de 1 segundo
  ease: "power3.out",  // Suavização
  //delay:.5,
  scrollTrigger:{
    trigger:'.arte-container',
    start:'top center',
  
  }
});
gsap.to(".animated-window", {
  y: 0,  // Sobe para a posição original
  duration: 1,  // Duração de 1 segundo
  ease: "power3.out",  // Suavização
  //delay:.5,
  scrollTrigger:{
    trigger:'.window-container',
    start:'top center',
  
  }
});
gsap.to(".animated-cliente", {
  y: 0,  // Sobe para a posição original
  duration: 1,  // Duração de 1 segundo
  ease: "power3.out",  // Suavização
  //delay:.5,
  scrollTrigger:{
    trigger:'.cliente-container',
    start:'top center',
  
  }
});
gsap.to(".animated-cativante", {
  y: 0,  // Sobe para a posição original
  duration: 1,  // Duração de 1 segundo
  ease: "power3.out",  // Suavização
  //delay:.5,
  scrollTrigger:{
    trigger:'.cativante-container',
    start:'top center',
  
  }
});



