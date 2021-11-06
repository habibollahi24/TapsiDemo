const toggler = document.querySelector(".nav__menu")
const navList = document.querySelector(".nav__list--item")
const navMenu = document.querySelector(".nav__menu")
toggler.addEventListener("click",()=>{
    
    navList.classList.toggle("toggler")
    navMenu.classList.toggle("colapse")
})