let generate = document.querySelector(".generate");
let generateText = document.querySelector(".generate-text");
let answerList = JSON.parse(localStorage.getItem("answerList"));
let clarificationText = document.querySelector(".clarification__text");
let arrScaleName = ["Физическая агрессия", "Косвенная", "Агрессия", "Раздражение", "Негативизм", "Обида", "Подозрительность", "Вербальная", "агрессия", "Чувство вины"];
for (let index = 0; index < answerList.length - 2; index++) {
    generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">${arrScaleName[index]}. Ваш балл: <span class="generate-text__gen">${answerList[index]}</span> баллов.</p>`);  
}
let resultOne = answerList[4] + answerList[5];
let resultTwo = answerList[0] + answerList[2] + answerList[6];

if (resultTwo >= 17 && resultTwo <= 25) {
    generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Враждебность. Ваш балл: <span class="generate-text__gen">${answerList[0]}</span> баллов. Соответствует норме</p>`)
} else {
    generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Враждебность. Ваш балл: <span class="generate-text__gen">${answerList[0]}</span> баллов. Не соответствует норме</p>`)
}
if (resultOne >= 4 && resultOne <= 10) {
    generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Агрессивность. Ваш балл: <span class="generate-text__gen">${answerList[1]}</span> баллов. Соответствует норме</p>`)
} else {
    generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Агрессивность. Ваш балл: <span class="generate-text__gen">${answerList[1]}</span> баллов. Не соответствует норме</p>`)
}
clarificationText.innerHTML = `
Уровень враждебности  определяется по сумме показателей обиды и подозрительности. Будем откровенны, это то, что разъедает нас изнутри, не дает спокойно жить. Конечно, нужно быть внимательными и осторожными, но это не то же самое, что обида и подозрительность. Улавливаете разницу? 
А вот агрессивность состоит из физической агрессии, раздражения и вербальной агрессии. Этот показатель демонстрирует Вашу способность проявлять агрессию открыто. Конечно, вы выпускаете пар и Вам становится легче. Но что делать с испорченными отношениями? С потерянными контактами? Всегда ли Ваша агрессия адекватна ситуации? Довольны ли вы результатами? Если у вас появилось желание  поработать над Вашей агрессией с психологом, мы рады предложить Вам консультацию.
`