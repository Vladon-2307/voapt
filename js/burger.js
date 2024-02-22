const btn = document.querySelector("#burger")
const menu = document.querySelector("#menu-mobile")
const body = document.body

body.addEventListener("click", (e) =>{
    if(e.srcElement == btn) return
    menu.classList.remove("menu-mobile__open")
})

btn.addEventListener("click", () => {
    menu.classList.toggle("menu-mobile__open")
})

const links = menu.querySelectorAll('.menu-mobile-element__link')

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
    link.addEventListener("click", () =>{
        menu.classList.remove("menu-mobile__open")
    });
});
