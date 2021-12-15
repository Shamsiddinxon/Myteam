const elHamburgerBtn = document.querySelector(".header__hamburger") ;
// const elHamburgerBtn = document.querySelector (".item__bottom") ;
// const elHeader = document.querySelector (".directors__item") ;
const elHeader = document.querySelector(".header") ;



elHamburgerBtn.addEventListener('click', ()=> {
    elHeader.classList.toggle("header--open");
})