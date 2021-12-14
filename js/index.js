const elHamburgerBtn = document.querySelector (".item__bottom") ;
const elHeader = document.querySelector (".directors__item") ;

elHamburgerBtn.addEventListener ('click', ()=> {
    elHeader.classList.toggle("header__open") ;
})