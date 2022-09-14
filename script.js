

// swiper  
const swiper = new Swiper('.swiper', {
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });

let menubtn = document.querySelector("#menu-btn")
let closebtn = document.querySelector("#close-btn")
let menu = document.querySelector("nav .container ul")

menubtn.addEventListener("click", () =>{
    menu.style.display = `block`
    menubtn.style.display = `none`
    closebtn.style.display = `inline-block`
})
closebtn.addEventListener("click", () =>{
    menu.style.display = `none`
    menubtn.style.display = `inline-block`
    closebtn.style.display = `none`
})

let navitems = menu.querySelectorAll("li")

let changeactiveclass = () =>{
    navitems.forEach(item => {
        let link = item.querySelector(`a`)
        link.classList.remove(`active`)
    })
}
navitems.forEach(item => {
    let link = item.querySelector(`a`)
    link.addEventListener(`click`,() => {
        changeactiveclass()
        link.classList.add(`active`)
    })
})

let readmorebtn = document.querySelector(`.read-more`)
let readmorecontent = document.querySelector(`.read-more-content`)

readmorebtn.addEventListener(`click`, () => {
    readmorecontent.classList.toggle(`show-content`)
if(readmorecontent.classList.contains(`show-content`)){
    readmorebtn.textContent = "show less"
}else{
    readmorebtn.textContent = "show more"

}

})

let skillitems = document.querySelectorAll(`section.skills .skill`)

skillitems.forEach(skill => {
    skill.querySelector(`.head`).addEventListener(`click`, () => {
        skill.querySelector(`.items`).classList.toggle(`show-items`)
    })
})











