let generate = document.querySelector(".generate");
let generateText = document.querySelector(".generate-text");
let answerList = JSON.parse(localStorage.getItem("answerList"));

let answers = answerList[0];
if (answers > 120) {
    generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Ваш балл: ${answers} баллов.</p>`);
    generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__desc">
        О сексе ты знаешь почти все. Ты хорошо изучил собственное тело, знаешь все его самые чувствительные места. Кроме того, любовь для тебя — это нечто большее, чем просто слово. Ты считаешь, что именно она определяет счастье человека, поэтому и секс для тебя — это не половое сношение, а занятие любовью.</p>`)
} else if (answers > 60 && answers < 120) {
    generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Ваш балл: ${answers} баллов.</p>`)
    generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__desc">Ты относишься к золотой середине. Любовь в твоей жизни не играет главной роли, впрочем, как и секс, хотя ты иногда влюбляешься. За сексуальную грамотность тебе можно поставить твердую «четверку». Это очень хорошо, но все же до «пятерки» тебе еще учиться и учиться.</p>`)
} else if (answers < 60) {
    generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Ваш балл: ${answers} баллов.</p>`)
    generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__desc">
        К сожалению, твои знания о сексе посредственные или даже неудовлетворительные. Что делать? Учиться, учиться и учиться… Читать специальную литературу и почаще обращать внимание на прекрасную сторону жизни.</p>`)
} 