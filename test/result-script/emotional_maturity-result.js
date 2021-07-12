let generate = document.querySelector(".generate");
let generateText = document.querySelector(".generate-text");
let answerList = JSON.parse(localStorage.getItem("answerList"));


if (answerList[answerList.length - 1] < 20) {
    generate.insertAdjacentHTML("afterbegin", `Вы ответили всего на ${answerList[answerList.length - 1]} вопросов. 
    Необходимо больше ответов для отображения результатов.`)
} else {
    if (answerList[0] >= 24 && answerList[0] <= 33) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Мотивация достижений. Ваш балл: <span class="generate-text__gen">${answerList[0]}</span> баллов. Весьма высокий уровень</p>`)
    } else if (answerList[0] >= 15 && answerList[0] <= 23) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Мотивация достижений. Ваш балл: <span class="generate-text__gen">${answerList[0]}</span> баллов. Высокий уровень</p>`)
    } else if (answerList[0] >= 7 && answerList[0] <= 14) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Мотивация достижений. Ваш балл: <span class="generate-text__gen">${answerList[0]}</span> баллов. Удовлетворительный урвоень</p>`)
    }
    else if (answerList[0] < 7) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Мотивация достижений. Ваш балл: <span class="generate-text__gen">${answerList[0]}</span> баллов. Неудовлетворительный урвоень</p>`)
    }


    if (answerList[1] >= 42 && answerList[1] <= 54) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Отношений к своему «Я». Ваш балл: <span class="generate-text__gen">${answerList[1]}</span> баллов. Весьма высокий уровень</p>`)
    } else if (answerList[1] >= 30 && answerList[1] <= 41) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Отношений к своему «Я». Ваш балл: <span class="generate-text__gen">${answerList[1]}</span> баллов. Высокий уровень</p>`)
    } else if (answerList[1] >= 20 && answerList[1] <= 29) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Отношений к своему «Я». Ваш балл: <span class="generate-text__gen">${answerList[1]}</span> баллов. Удовлетворительный урвоень</p>`)
    }
    else if (answerList[1] < 20) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Отношений к своему «Я». Ваш балл: <span class="generate-text__gen">${answerList[1]}</span> баллов. Неудовлетворительный урвоень</p>`)
    }

    if (answerList[2] >= 12 && answerList[2] <= 18) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Чувство гражданского долга. Ваш балл: <span class="generate-text__gen">${answerList[2]}</span> баллов. Весьма высокий уровень</p>`)
    } else if (answerList[2] >= 7 && answerList[2] <= 11) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Чувство гражданского долга. Ваш балл: <span class="generate-text__gen">${answerList[2]}</span> баллов. Высокий уровень</p>`)
    } else if (answerList[2] >= 4 && answerList[2] <= 6) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Чувство гражданского долга. Ваш балл: <span class="generate-text__gen">${answerList[2]}</span> баллов. Удовлетворительный урвоень</p>`)
    }
    else if (answerList[2] < 4) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Чувство гражданского долга. Ваш балл: <span class="generate-text__gen">${answerList[2]}</span> баллов. Неудовлетворительный урвоень</p>`)
    }

    if (answerList[3] >= 27 && answerList[3] <= 36) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Жизненная установка. Ваш балл: <span class="generate-text__gen">${answerList[3]}</span> баллов. Весьма высокий уровень</p>`)
    } else if (answerList[3] >= 19 && answerList[3] <= 26) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Жизненная установка. Ваш балл: <span class="generate-text__gen">${answerList[3]}</span> баллов. Высокий уровень</p>`)
    } else if (answerList[3] >= 11 && answerList[3] <= 18) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Жизненная установка. Ваш балл: <span class="generate-text__gen">${answerList[3]}</span> баллов. Удовлетворительный урвоень</p>`)
    } else if (answerList[3] < 11) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Жизненная установка. Ваш балл: <span class="generate-text__gen">${answerList[3]}</span> баллов. Неудовлетворительный урвоень</p>`)
    }


    if (answerList[4] >= 15 && answerList[4] <= 21) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Способность к психологической близости с другим человеком.  Ваш балл: <span class="generate-text__gen">${answerList[4]}</span> баллов. Весьма высокий уровень</p>`)
    } else if (answerList[4] >= 10 && answerList[4] <= 14) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Способность к психологической близости с другим человеком.  Ваш балл: <span class="generate-text__gen">${answerList[4]}</span> баллов. Высокий уровень</p>`)
    } else if (answerList[4] >= 7 && answerList[4] <= 9) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Способность к психологической близости с другим человеком.  Ваш балл: <span class="generate-text__gen">${answerList[4]}</span> баллов. Удовлетворительный урвоень</p>`)
    } else if (answerList[4] < 7) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Способность к психологической близости с другим человеком.  Ваш балл: <span class="generate-text__gen">${answerList[4]}</span> баллов. Неудовлетворительный урвоень</p>`)
    }
}