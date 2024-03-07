const toggle = document.querySelector('.toggle')
const body = document.querySelector('body')
const nav = body.querySelector('.navs')
const container = body.querySelector('.container')

console.log(nav)

const toggleNav = () => {
    nav.classList.toggle('remove')
    console.log('Helolo world')
    // container.classList.toggle('hello')
    console.log('booss')
}





toggle.addEventListener('click', toggleNav)




