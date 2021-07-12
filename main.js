let acc = document.getElementsByClassName("questions__button-cont");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.cssText = `max-height: ${null}; padding: 0px 20px 0px;`
    } else {
      panel.style.cssText = `max-height: ${panel.scrollHeight}px; padding: 0 20px 20px;`
    }
  });
}

window.addEventListener("resize", () => {

})

let burgerButton = document.querySelector(".header__burger-button");
let linkPanel = document.querySelector(".header__inner-list");
let bodyPlaceholder = document.querySelector(".body-placeholder");
let bPage = document.querySelector(".b-page");


burgerButton.addEventListener("click", funcToggleMenu);
bodyPlaceholder.addEventListener("click",funcToggleMenu);

function funcToggleMenu() {
  linkPanel.classList.toggle("header__inner-list--visible-js");
  burgerButton.classList.toggle("header__burger-button--active");
  bodyPlaceholder.classList.toggle("body-placeholder--active-js");
  bPage.classList.toggle("b-page--active-menu-js");
}
function funk() {
  window.addEventListener("click", )
}

let form = document.querySelector(".call__form");
let placeholder = document.querySelector(".placeholder");




let dotList = document.querySelector(".slide-contr__list");
let slide = document.querySelectorAll(".slide").length;
let tapeSlides = document.querySelector(".slider__cont-slide");
let calculateSlide;
let currentSlide = 0


for (let index = 0; index < slide; index++) {
  dotList.insertAdjacentHTML("afterbegin", `<li class="slide-contr__item"><span class="slide-contr__dot"></span></li>`);
}
let dotItem = document.querySelectorAll(".slide-contr__item");
dotItem[0].classList.add("slide-contr__item--active");
let thisDot = 0;
for (let index = 0; index < dotItem.length; index++) {
  dotItem[index].addEventListener("click", () => {
    for (let i = 0; i < dotItem.length; i++) {
      if (dotItem[i].classList.contains("slide-contr__item--active")) {
        dotItem[i].classList.remove("slide-contr__item--active");
      }
      calculateSlide = tapeSlides.scrollWidth / slide;
      thisDot++;
      currentSlide = index;
      tapeSlides.style.transform = `translateX(-${index * calculateSlide}px)`;
      dotItem[index].classList.add("slide-contr__item--active");
    }
  })
}
window.addEventListener("resize", () => {
  calculateSlide = tapeSlides.scrollWidth / slide;
  tapeSlides.style.transform = `translateX(-${currentSlide * calculateSlide}px)`;
});




