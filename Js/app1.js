let button1 = document.querySelector('.next')
let navdot = document.querySelector('.navdots')

// button1.addEventListener('click', goToNext)
function goToNext() {
  const offset = button1.dataset.carouselButton === 'next'? +1 : -1
  const slides = button1.closest('[data-carousel]').querySelector('[data-slides]')
  // for (let i = 0; i < array.length; i++) {
  //   const element = array[i];
    
  // }

  const activeSlide = slides.querySelector('[data-active]')
  let newIndex = [...slides.children].indexOf(activeSlide) + offset
  if(newIndex < 0) newIndex = slides.children.length - 1
  if(newIndex >= slides.children.length)newIndex = 0

  slides.children[newIndex].dataset.active = true
  delete activeSlide.dataset.active
}

setInterval(goToNext, 4000)
// const observer = new inter

//Creating the animation of the 'second' class

let buttons = document.querySelectorAll('.next1')

// button1.addEventListener('click', goToNext)
buttons.forEach(button => {
  setInterval(() => {

    const offset = button.dataset.carouselButton1 === 'next1'? +1 : -1
    const slides = button.closest('[data-carousel1]').querySelector('[data-slides1]')
  
    const activeSlide = slides.querySelector('[data-active1]')
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if(newIndex < 0) newIndex = slides.children.length - 1
    if(newIndex >= slides.children.length)newIndex = 0
  
    slides.children[newIndex].dataset.active1 = true
    delete activeSlide.dataset.active1
  }, 2500)
})
