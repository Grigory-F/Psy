let generate = document.querySelector(".generate");
let generateText = document.querySelector(".generate-text");
let innerScale = document.querySelectorAll(".generate-scale__inner-scale");
let answerList = JSON.parse(localStorage.getItem("answerList"));
    let answers = answerList[0] + answerList[1];
    let calculateProcentOne = Math.round((answerList[0] / 39) * 100);
    let calculateProcentTwo = Math.round((answerList[1] / 24) * 100);
    let calculateDotOne = Math.round(calculateProcentOne / 10);
    let calculateDotTwo = Math.round(calculateProcentTwo / 10);
    let dots = [calculateDotOne, calculateDotTwo];
    let procentScales = [calculateProcentOne, calculateProcentTwo];
    let boxScale = document.querySelectorAll(".generate-scale");
    let elementDot = document.querySelectorAll(".generate-scale__dot");
    let generateScaleNum = document.querySelectorAll(".generate-scale__num");
    for (let je = 0; je < boxScale.length; je++) {
        boxScale[je].style.display = "block";
    }
    for (let iter = 0; iter < dots.length; iter++) {
        const count = innerScale[iter].children;
        for (let ss = 0; ss < dots[iter]; ss++) {
            count[ss].style.visibility = "visible";
            generateScaleNum[iter].innerHTML = procentScales[iter];
        }
    }

    if (answers <= 9) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Отсутствие выраженных депрессивных симптомов</p>`)
    } else if (answers >= 10 && answers <= 15) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Легкая депрессия (субдепрессия)</p>`)
    } else if (answers >= 16 && answers <= 19) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Умеренная депрессия</p>`)
    } else if (answers >= 20 && answers <= 29) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Выраженная депрессия средней тяжести</p>`)
    } else if (answers >= 30 && answers <= 63) {
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Тяжелая депрессия.</p>`)
    }
