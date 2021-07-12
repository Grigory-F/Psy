let generate = document.querySelector(".generate");
let generateText = document.querySelector(".generate-text");
let answerList = JSON.parse(localStorage.getItem("answerList"));
let clarificationText = document.querySelector(".clarification__text");



if (answerList[answerList.length - 1] < 50) {
    generate.insertAdjacentHTML("afterbegin", `Вы ответили всего на ${answerList[answerList.length - 1]} вопросов. 
    Необходимо больше ответов для отображения результатов`)
} else {
    if (answerList[0] > 61) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Напряжение. Ваш балл: <span class="generate-text__gen">${answerList[0]}</span> баллов. Сформировавшаяся фаза</p>`)
    } else if (answerList[0] >= 37 && answerList[0] <= 60) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Напряжение. Ваш балл: <span class="generate-text__gen">${answerList[0]}</span> баллов. Фаза в стадии формирования</p>`)
    } else if (answerList[0] < 37) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Напряжение. Ваш балл: <span class="generate-text__gen">${answerList[0]}</span> баллов. Фаза не сформировалас</p>`)
    }


    if (answerList[1] > 61) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Резистенция. Ваш балл: <span class="generate-text__gen">${answerList[1]}</span> баллов. Сформировавшаяся фаза</p>`)
    } else if (answerList[1] >= 37 && answerList[1] <= 60) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Резистенция. Ваш балл: <span class="generate-text__gen">${answerList[1]}</span> баллов. Фаза в стадии формирования</p>`)
    } else if (answerList[1] < 37) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Резистенция. Ваш балл: <span class="generate-text__gen">${answerList[1]}</span> баллов. Фаза не сформировалас</p>`)
    }

    if (answerList[2] > 61) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Истощение. Ваш балл: <span class="generate-text__gen">${answerList[2]}</span> баллов. Сформировавшаяся фаза</p>`);
        clarificationText.innerHTML = `Формирующаяся или уже сформированная фаза истощения вполне может объяснять Ваше плачевное эмоциональное состояние. Нам очень жаль и мы Вам рекомендуем всерьез заняться изучением Вашей ситуации. Важно какие именно сложившиеся и доминирующие симптомы сопровождают Ваше истощение. Объяснимо ли сложившееся или формирующееся истощение профессиональными факторами или субъективные факторы добавляют стресса? Мы, психологи, не сможем повлиять на Вашу профессиональную обстановку, но выявить признаки и аспекты Вашего поведения мы можем. И предложить Вам коррекцию вашей стратегии совладания со стрессом мы вполне в силах. Современная психологическая наука значительно продвинулась в изучении стресса и эмоционального выгорания и мы будем рады помочь Вам.`
    } else if (answerList[2] >= 37 && answerList[2] <= 60) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Истощение. Ваш балл: <span class="generate-text__gen">${answerList[2]}</span> баллов. Фаза в стадии формирования</p>`);
        clarificationText.innerHTML = `Формирующаяся или уже сформированная фаза истощения вполне может объяснять Ваше плачевное эмоциональное состояние. Нам очень жаль и мы Вам рекомендуем всерьез заняться изучением Вашей ситуации. Важно какие именно сложившиеся и доминирующие симптомы сопровождают Ваше истощение. Объяснимо ли сложившееся или формирующееся истощение профессиональными факторами или субъективные факторы добавляют стресса? Мы, психологи, не сможем повлиять на Вашу профессиональную обстановку, но выявить признаки и аспекты Вашего поведения мы можем. И предложить Вам коррекцию вашей стратегии совладания со стрессом мы вполне в силах. Современная психологическая наука значительно продвинулась в изучении стресса и эмоционального выгорания и мы будем рады помочь Вам.`
    } else if (answerList[2] < 37) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Истощение. Ваш балл: <span class="generate-text__gen">${answerList[2]}</span> баллов. Фаза не сформировалас</p>`);
        clarificationText.innerHTML = `Очевидно, что стресс в Вашей жизни присутствует и Вы справляетесь с ним. Вопрос как долго хватит Ваших ресурсов на обслуживание рабочего или какого либо другого стресса в Вашей жизни. Хотите ли Вы тратить время Вашей жизни, эмоции и силы на стресс? И, возвращаясь к Вашим ощущениям одиночества и раздражительности, мы рекомендуем Вам записаться на консультацию психолога для выяснения глубинных причин Ваших проблем и налаживания гармоничной коммуникации с близкими и друзьями.`
    }
}


