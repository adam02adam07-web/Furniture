const burger = document.querySelector('.burger')
const mobilemenu = document.querySelector('mobile-menu')
const overlay = document.querySelector('mobile-menu')
burger.addEventListener('click',() =>{
    mobilemenu.classList.add('active')
    overlay.classList.add('active')
})
overlay.addEventListener('click', ()=>{
    mobilemenu.classList.remove("active")
    overlay.classList.remove('active')
})