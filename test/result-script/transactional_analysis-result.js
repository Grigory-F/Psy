let generate = document.querySelector(".generate");
let generateText = document.querySelector(".generate-text");
let answerList = JSON.parse(localStorage.getItem("answerList"));

if (answerList[1] > answerList[0] || answerList[1] > answerList[2]) {
    generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Состояние Эго - Взрослый. Ваш балл: <span class="generate-text__gen">${answerList[1]}</span></p>
        <p class="generate-text__desc">Вы обладаете чувством ответственности, в меру импульсивны и не склоны к назиданиям.</p>`)
} else if (answerList[2] > answerList[1] || answerList[2] > answerList[0]) {
    generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Состояние Эго - Родитель. Ваш балл: <span class="generate-text__gen">${answerList[2]}</span></p>
        <p class="generate-text__desc">Для вас характерна категоричность в суждениях и действиях, возможно излишнее проявление самоуверенности при взаимодействии с людьми, чаще всего говорите без сомнения то, что думаете или знаете, не заботясь о последствиях ваших слов и действий.</p>`)
} else if (answerList[0] > answerList[2] || answerList[0] > answerList[1]) {
    generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Состояние Эго - Детское. Ваш балл: <span class="generate-text__gen">${answerList[0]}</span></p>
        <p class="generate-text__desc">Вы можете проявлять склонность к научной работе, хотя и не всегда умеете управлять своими эмоциями.</p>`)
}