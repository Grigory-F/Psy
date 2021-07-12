let generate = document.querySelector(".generate");
let generateText = document.querySelector(".generate-text");
let answerList = JSON.parse(localStorage.getItem("answerList"));

let scaleOne = answerList[0] - answerList[1] + 50,
scaleTwo = answerList[2] - answerList[3] + 35;


if (answerList[answerList.length - 1] < 20) {
    generate.insertAdjacentHTML("afterbegin", `Вы ответили всего на ${answerList[answerList.length - 1]} вопросов. 
    Необходимо больше ответов для отображения результатов.`)
} else {
    if (scaleOne < 30) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Реактивная тревожность. Ваш балл: <span class="generate-text__gen">${scaleOne}</span> баллов. Низкий уровень</p>`)
    } else if (scaleOne >= 30 && scaleOne <= 45) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Реактивная тревожность. Ваш балл: <span class="generate-text__gen">${scaleOne}</span> баллов. Умеренный уровень </p>`)
    } else if (scaleOne >= 46) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Реактивная тревожность. Ваш балл: <span class="generate-text__gen">${scaleOne}</span> баллов. Высокий уровень</p>`)
    }


    if (scaleTwo < 30) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Личностная тревожность. Ваш балл: <span class="generate-text__gen">${scaleTwo}</span> баллов. Низкий уровень</p>`)
    } else if (scaleTwo >= 30 && scaleTwo <= 45) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Личностная тревожность. Ваш балл: <span class="generate-text__gen">${scaleTwo}</span> баллов. Умеренный уровень </p>`)
    } else if (scaleTwo >= 46) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Личностная тревожность. Ваш балл: <span class="generate-text__gen">${scaleTwo}</span> баллов. Высокий уровень</p>`)
    }
}
