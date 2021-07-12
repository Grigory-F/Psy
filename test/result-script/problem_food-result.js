let generate = document.querySelector(".generate");
let generateText = document.querySelector(".generate-text");
let clarificationText = document.querySelector(".clarification__text");

let answerList = JSON.parse(localStorage.getItem("answerList"));
let answer1 = answerList[0] / 10;
let answer2 = answerList[1] / 13;
let answer3 = answerList[2] / 10;
let scaleOne = parseFloat(answer1.toFixed(1)),
    scaleTwo = parseFloat(answer2.toFixed(1)),
    scaleThree = parseFloat(answer3.toFixed(1));
console.log(scaleOne);
console.log(scaleTwo);
console.log(scaleThree);

if (scaleOne > 2.2 || scaleOne < 2.6) {
    generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Ограничительное (Диетическое) пищевое поведение.  Ваш балл: <span class="generate-text__gen">${scaleOne}</span> баллов.</p>
        <p class="generate-text__desc">У вас нет проблем с ограничениями в пище, вы разрешаете себе есть свободно и при этом питаетесь достаточно разумно. </p>`)
} else if (scaleOne > 2.6) {
    generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Ограничительное (Диетическое) пищевое поведение.  Ваш балл: <span class="generate-text__gen">${scaleOne}</span> баллов.</p>
        <p class="generate-text__desc">Cкорее всего, вы “осторожный” или “профессиональный” едок, ваши отношения с едой далеки от гармоничных. Вы боитесь есть, чтобы не набрать вес или руководствуясь соображениями “полезности”.</p>`)
} else if (scaleOne < 2.2) {
    generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Ограничительное (Диетическое) пищевое поведение.  Ваш балл: <span class="generate-text__gen">${scaleOne}</span> баллов.</p>
        <p class="generate-text__desc">Вы едите бесконтрольно, без ограничений, плохо осознавая, что и как вы едите. Чаще всего низкий результат по этой шкале сочетается с повышениями по двум другим шкалам и также означает нарушение пищевого поведения.</p>`)
}


if (scaleTwo == 1.8) {
    generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Эмоциональное пищевое поведение. Ваш балл: <span class="generate-text__gen">${scaleTwo}</span> баллов.</p>
        <p class="generate-text__desc">Вы не склонны заедать эмоции.</p>`)
} else if (scaleTwo > 1.8) {
    generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Эмоциональное пищевое поведение. Ваш балл: <span class="generate-text__gen">${scaleTwo}</span> баллов.</p>
        <p class="generate-text__desc">вам сложно перерабатывать эмоции, не прибегая к помощи еды. Еда в вашей жизни не враг, а утешитель, психотерапевт и друг. Скорее всего, ваш пищевой стиль - “эмоциональный едок”.</p>`)
}

if (scaleThree == 2.7) {
    generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Экстернальное пищевое поведение. Ваш балл: <span class="generate-text__gen">${scaleThree}</span> баллов.</p>
        <p class="generate-text__desc">Соответствует норме</p>`)
} else if (scaleThree > 2.7) {
    generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Экстернальное пищевое поведение.  Ваш балл: <span class="generate-text__gen">${scaleThree}</span> баллов.</p>
        <p class="generate-text__desc">Вы, скорее всего, “безотказный” едок, которому сложно остановиться, начав есть, сложно удержаться при виде вкусной или просто лежащей на виду еды. Такие люди обычно считают, что им нельзя иметь дома вкусной еды, поскольку она будет съедена в первый же день после покупки, и за ужином с друзьями съедают существенно больше, чем в одиночестве.</p>`)
}
else if (scaleThree < 2.7) {
    generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Экстернальное пищевое поведение.  Ваш балл: <span class="generate-text__gen">${scaleThree}</span> баллов.</p>
        <p class="generate-text__desc">Вы не склонны переедать в социальных ситуациях или потому, что еда находится на виду и доступна.</p>`)
}

clarificationText.innerHTML = `
Если сейчас еда помогает Вам справиться с эмоциями, отвлекает 
от переживаний, то мы готовы предложить Вам терапию, направленную 
на развитие Вашего эмоционального интеллекта. Вы узнаете причины 
сегодняшних сложностей, научитесь переносить сложные и сильные эмоции
 и чувства не прибегая к помощи еды или других отвлекающих активностей.
  Наши чувства, эмоции - это наша жизнь. Бывает трудно ее “переварить”,
   отреагировать происходящее, и мы уходим в отвлекающую активность
    (в зависимости от типа личности и от индивидуальной истории это 
        может быть как еда, так и алкоголь или спорт, или работа, или
         бесконечное общение с друзьями). Развитый эмоциональный интеллект предполагает
          способность идентифицировать как свои, так и переживания окружающих.
           Скорее всего, Ваше понимание ситуаций, возникающих в общении, кардинально
            изменится - вы научитесь понимать оттенки чувств, эмоций, станут понятны
             иррациональные поступки. И вы научитесь переносить сложные чувства, искать 
             восполнение Ваших эмоциональных потребностей не в еде. Часто развитие эмоционального
              интеллекта приводит к глубинной терапии. Мы можем Вам предложить и этот вид работы.
               Но для начала нам нужно встретиться и обсудить Вашу конкретную ситуацию.`


