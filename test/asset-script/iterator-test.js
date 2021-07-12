let i = 0;
let answers = 0;
buttonLinkEnd[questions.length - 1].addEventListener("click", () => {
    for (; i < questionList.length; i++) {
        for (let key in questionList[i]) {
            let calcQuestionsNumber = questionsAnswers[questionList[i][key] - 1].childNodes;
            for (let s = 0; s < calcQuestionsNumber.length; s++) {
                let interatTwo = calcQuestionsNumber[s].childNodes;
                for (let j = 0; j < interatTwo.length; j++) {
                    if (interatTwo[j].checked == true) {
                        answerList[i] += parseInt(interatTwo[j].value);
                        console.log(answerList[i]);
                        answers++;
                    }
                }
            }
        }
    }
    answerList.push(testName);
    answerList.push(answers);
    localStorage.setItem("answerList", JSON.stringify(answerList));
});