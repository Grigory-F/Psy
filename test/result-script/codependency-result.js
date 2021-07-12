let generate = document.querySelector(".generate");
let generateText = document.querySelector(".generate-text");

let answerList = JSON.parse(localStorage.getItem("answerList"));
if (answerList[answerList.length - 1] < 13) {
    generate.insertAdjacentHTML("afterbegin", `Вы ответили всего на ${answerList[answerList.length - 1]} вопросов. 
    Необходимо больше ответов для отображения результатов`)
} else {
if (answerList[0] >= 20 && answerList[0] <= 29) {
    generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Очень мало созависимых моделей поведения. Ваш балл: <span class="generate-text__gen">${answerList[0]}</span> баллов</p>`)
}else if (answerList[0] >= 30 && answerList[0] <= 39) {
    generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Cредняя степень созависимых моделей поведения. Ваш балл: <span class="generate-text__gen">${answerList[0]}</span> баллов</p>`)
}else if (answerList[0] >= 40 && answerList[0] <= 59) {
    generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Высокая степень созависимых моделей поведения. Ваш балл: <span class="generate-text__gen">${answerList[0]}</span> баллов</p>`)
}
else if (answerList[0] >= 60 && answerList[0] <= 80) {
    generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Очень высокая степень созависимых моделей поведения. Ваш балл: <span class="generate-text__gen">${answerList[0]}</span> баллов</p>`)
}
}