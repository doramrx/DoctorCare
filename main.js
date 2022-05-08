
window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
 showNavOnScroll()
 showBackToTopButtonOnScreen()

 activateMenuAtCurrentSection(home)
 activateMenuAtCurrentSection(services)
 activateMenuAtCurrentSection(about)
 activateMenuAtCurrentSection(contact)
}

//section = home ou services ou sobre
function activateMenuAtCurrentSection(section){
  const targetLine = scrollY + innerHeight / 2

 /*verificar se a seção passou da linha*/

 //topo da seção
 const sectionTop = section.offsetTop

 //altura da seção
 const sectionHeight = section.offsetHeight

 //o topo da seção chegou ou ultrapassou a linha alto
 const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

 /*verificar se a base está abaixo da linha alto*/

 //a seção termina onde?
 const sectionEndsAt = sectionTop + sectionHeight

 const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
 
 //limites da seção
 const sectionBoundaries = 
 sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

 const sectionId = section.getAttribute('id')
 const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

 menuElement.classList.remove('active')
 if(sectionBoundaries){
  menuElement.classList.add('active')
 }

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


