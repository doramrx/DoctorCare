
window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
 showNavOnScroll()
 showBackToTopButtonOnScreen()
}

function showNavOnScroll(){
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScreen(){
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}



function openMenu(){
  document.body.classList.add('menu-expanded')
}

function closeMenu(){
  document.body.classList.remove('menu-expanded')
}

/*revelando conteudo da pagina conforme navegamos na pagina utilizando a bibioteca ScrollReveal*/
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`#home, 
           #home img, 
           #home .stats, 
           #services
           #services header,
           #services .card,
           #about,
           #about header,
           #about .content`)