let containerTape = document.querySelector(".test-layout__container");
let questions = document.querySelectorAll(".question");
let questionsAnswers = document.querySelectorAll(".question__answers");
let buttonFurther = document.querySelectorAll(".question-conrols__following");
let buttonBack = document.querySelectorAll(".question-conrols__back");
let questionCounter = document.querySelector(".test-layout__counter");
let buttonLinkEnd = document.querySelectorAll(".question-conrols__following--link-hidden");
let answerContainer = document.querySelectorAll(".answer");
let slideCounter = 0;
let questionWarning = document.querySelectorAll(".question__warning");
let sizeSlide = 0;
buttonLinkEnd[questions.length - 1].style.display = "block";
buttonFurther[questions.length - 1].style.display = "none";
for (let index = 0; index < answerContainer.length; index++) {
    answerContainer[index].addEventListener("click", () => {
        answerContainer[index].parentNode.classList.add("active-check");
    })
}
function includeSlideCounter() {
    questionCounter.innerHTML = `Вопрос ${slideCounter + 1} / ${questions.length}`
}
includeSlideCounter();


window.addEventListener("resize", calcutlateSizeSlide);
function calcutlateSizeSlide(signMath) {
    sizeSlide = containerTape.scrollWidth / questions.length;
    if (signMath == "+") {
        slideCounter++;
    } else if (signMath == "-") {
        slideCounter--;
    }
    containerTape.style.cssText = `transform: translateX(-${sizeSlide * slideCounter}px)`;
    includeSlideCounter();
}


for (let i = 0; i < buttonFurther.length; i++) {
    buttonFurther[i].addEventListener("click", () => {
        if (questionsAnswers[i].classList.contains("active-check")) {
            questionWarning[i].classList.remove("question__warning--active");
            calcutlateSizeSlide("+");
        } else {
            questionWarning[i].classList.add("question__warning--active");
        }
    }
    )
}

for (let s = 1; s < buttonBack.length; s++) {
    buttonBack[s].addEventListener("click", () => {
        calcutlateSizeSlide("-");
    });
}




