let generate = document.querySelector(".generate");
let generateText = document.querySelector(".generate-text");
let answerList = JSON.parse(localStorage.getItem("answerList"));
let answerListArr = {
    one: answerList[0],
    two: answerList[1],
    three: answerList[2],
    four: answerList[3],
    five: answerList[4],
    six: answerList[5],

};
let sortable = [];

if (answerList[answerList.length - 1] < 90) {
    generate.insertAdjacentHTML("afterbegin", `<p class="generate-text__gen">Вы отметили всего ${answerList[answerList.length - 1]} ответов. 
    Необходимо больше для корректного отображения результата<p>`)
} else {
    for (var vehicle in answerListArr) {
        sortable.push([vehicle, answerListArr[vehicle]]);
    }

    sortable.sort(function (a, b) {
        return b[1] - a[1];
    });

    if (sortable[0][0] == "one") {
        genTextResult("Реалистический");
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__desc">
        Предпочитаемые виды деятельности:
        - механические виды деятельности, управление большими машинами, тяжелым 
        оборудованием, управление механизмами и использование инструментов, требующих точности,
        ловкости, тонкой моторной координации (сверлильный, токарный станки, бор дантиста, хирургический скальпель, ювелирные инструменты),
        - строительство, ремонт, военные виды деятельности, конструкторские работы,
        - любая деятельность, которая дает ощутимый результат, предпочитают действия мышления, конкретные задачи трудным и абстрактным проблемам.</p>`)
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Профессии вашего типа: плотник, картограф, фермер, инженер, лесничий, пилот, милиционер, ветеринар, водитель, сварщик.</p>`)

    } else if (sortable[0][0] == "two") {
        genTextResult("Исследовательский");
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__desc">
        Предпочитаемые виды деятельности:
        - сбор информации, ее систематизация, анализ,

- выполнение сложных или абстрактных заданий,

- решение проблем через размышления, анализ гипотез и теорий,

- независимая, самостоятельная работа на самого себя,

- выполнение научной или лабораторной работы,

- предпочитают размышления действиям.</p>`)
generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Профессии вашего типа: инженер-конструктор, биолог, дегустатор, маркетолог, геодезист, генетик, астроном, фармаколог, терапевт, археолог, криминалист, психолог, программист.</p>`)

    }
    else if (sortable[0][0] == "three") {
        genTextResult("Артистический");
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__desc">
        Предпочитаемые виды деятельности:
        - художественное творчество (живопись, скульптура, фотография, создание украшений, дизайн, композиция, литературное творчество и т.д.)

- игра на музыкальных инструментах,

- исполнительская актерская деятельность.</p>`)
generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Профессии вашего типа: артист, архитектор, скульптор, дирижер, фотограф, учитель музыки, директор музея.</p>`)

    }
    else if (sortable[0][0] == "four") {
        genTextResult("Социальный");
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__desc">
        Предпочитаемые виды деятельности:
        ориентация на работу в группе с людьми, а не с предметами,

- обучение, объяснение, разъяснение,

- оказание помощи, консультирование, предоставление советов,

- организация групповых мероприятий, ведение дискуссий,</p>`)
generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Профессии вашего типа: учитель, воспитатель, работник сферы здравоохранения, социальный работник, - психолог, священнослужитель</p>`)

    }
    else if (sortable[0][0] == "five") {
        genTextResult("Предпринимательский");
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__desc">
        Предпочитаемые виды деятельности:
        работа с другими людьми в организациях для достижения организационных целей и экономического успеха,

        - финансовый и межличностный риск, участие в соревновательной деятельности,
        
        продажа, покупка, коммерция, предпринимательство,
        
        - проведение собраний, групп, руководство организациями, компаниями,
        
        - управление людьми и проектами,
        
        - проведение политических компаний, выборов, презентаций и т.п.</p>`)
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Профессии вашего типа: коммерсант, предприниматель, биржевой брокер, адвокат, страховой агент, менеджер.</p>`)
    }
    else if (sortable[0][0] == "six") {
        genTextResult("Конвенциональный");
        generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__desc">
        Предпочитаемые виды деятельности:
        работа, которая требует внимания к деталям и аккуратности,

- управление офисным оборудованием,

- ведение картотек, хранение и систематизация записей, фактов, данных, финансовых книг,

- написание деловых отчетов, подготовка схем, таблиц, диаграмм.</p>`)
generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Профессии вашего типа: бухгалтер, кассир, счетовод, банкир, секретарь.</p>`)
    }
}
function genTextResult(res) {
    generateText.insertAdjacentHTML("beforeend", `<p class="generate-text__name-scale">Ваш преобладающий тип: ${res}</p>`)
}