const btn = document.querySelectorAll(".m-menu-btn")
const menu = document.querySelector(".m-menu-list")
const body = document.body


body.addEventListener("click", (e) =>{
    if(e.srcElement == btn[0] || e.srcElement == btn[1] ) {
        menu.classList.toggle("open")

    }else{
        menu.classList.remove("open")
    }
})

const links = menu.querySelectorAll('.m-menu-item__link')

links.forEach((link) => {
    link.addEventListener("click", () =>{
        menu.classList.remove("open")
    });
});
