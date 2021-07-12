<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="google" content="notranslate" />
    <meta name="robots" content="index,follow" />
    <meta name="description" content=" " />
    <meta name="keywords" content=" " />
    <link rel="stylesheet" href="css/result.css" />
    <title>Запишитесь на консультацию</title>
  </head>
  <body class="page">
    <section class="result-sect">
      <div class="result-sect__layout layout">
        <div class="result-sect__text">
          <h1 class="result-sect__title title">Спасибо за Ваше время!</h1>
          <p class="result-sect__subtitle min-title">
            Просим Вас не&nbsp;воспринимать механические результаты теста как приговор и&nbsp;принимать во&nbsp;внимание Вашу ситуацию. Мы&nbsp;будем рады проконсультировать Вас лично онлайн или на&nbsp;очной консультации в&nbsp;Санкт-Петербурге.
          </p>
        </div> 
        <div class="gen-result">
        <h2 class="gen-result__title title">Ваш результат:</h2>
        <div class="generate">
          <div class="generate-scale">
            <p class="generate-scale__name-scale">Когнитивно-аффективная субшкала (C-A)</p>
            <div class="generate-scale__wrap-scale">
              <div class="generate-scale__inner-scale">
              <div class="generate-scale__dot"></div>
              <div class="generate-scale__dot"></div>
              <div class="generate-scale__dot"></div>
              <div class="generate-scale__dot"></div>
              <div class="generate-scale__dot"></div>
              <div class="generate-scale__dot"></div>
              <div class="generate-scale__dot"></div>
              <div class="generate-scale__dot"></div>
              <div class="generate-scale__dot"></div>
              <div class="generate-scale__dot"></div>
              </div>
              <p class="generate-scale__num"></p>
            </div>
          </div>
          
          <div class="generate-scale">
            <p class="generate-scale__name-scale">Субшкала соматических проявлений депрессии (S-P)</p>
            <div class="generate-scale__wrap-scale">
              <div class="generate-scale__inner-scale">
              <div class="generate-scale__dot"></div>
              <div class="generate-scale__dot"></div>
              <div class="generate-scale__dot"></div>
              <div class="generate-scale__dot"></div>
              <div class="generate-scale__dot"></div>
              <div class="generate-scale__dot"></div>
              <div class="generate-scale__dot"></div>
              <div class="generate-scale__dot"></div>
              <div class="generate-scale__dot"></div>
              <div class="generate-scale__dot"></div>
              </div>
              <p class="generate-scale__num"></p>
            </div>
          </div>
          <div class="generate-text">
          </div>
          <div class="clarification">
            <div class="clarification__button">
              <h4 class="clarification__title">Пояснение результата теста</h4>
              <div class="clarification__arrows"></div>
            </div>
            <div class="clarification__inner-text">
              <p class="clarification__text">
              </p>
            </div>
          </div>
          <div class="gen-result__wrap-controls">
            <a href="#" class="gen-result__save-button button-ax">Сохранить результаты</a>
            <a href="/" class="gen-result__more-button button-ax">Пройти еще тест</a>
          </div>
        </div>
      </div>
    </section>

    <section class="form-sect">
      <div class="form-sect__layout layout">
        <h2 class="form-sect__title title">Запланировать консультацию</h2>
        <p class="form-sect__subtitle min-title">
        Мы свяжемся с вами в удобное для вас время удобным для вас способом
            </p>
        <form class="form" action="/" method="POST">
          <div class="form__item">
            <label class="form__label">Имя или псевдоним*</label>
            <input type="text" placeholder="Например: Иван Н." name="name" class="form__input" />
          </div>
          <div class="form__item">
            <label class="form__label">Выберите сервис*</label>
            <select class="form__select" name="select-service">
              <option class="form__select-item" value="Whatsapp">Whatsapp</option>
              <option class="form__select-item" value="Viber">Viber</option>
              <option class="form__select-item" value="Skype">Skype</option>
              <option class="form__select-item" value="Zoom">Zoom</option>
            </select>
            <div class="arrows"></div>
          </div>
          <div class="form__item">
            <label class="form__label">Телефон или почта*</label>
            <input type="number" name="telephone" placeholder="Например: 8(999) 99..." class="form__input" />
          </div>
          <div class="form__item">
            <label class="form__label">Почта</label>
            <input type="email" name="email" class="form__input" />
          </div>
          <div class="form__item flex">
            <div class="item-flex__inner-date">
              <label class="item-flex__date-label">Дата*</label>
              <select class="item-flex__date-select" name="date">
                <option class="item-flex__select-item" value="Сегодня">
                  Сегодня
                </option>
                <option class="item-flex__select-item" value="Завтра">
                  Завтра
                </option>
                <option class="item-flex__select-item" value="Пока не определился">
                  Пока не определился
                </option>
              </select>
              <div class="arrows"></div>
            </div>
            <div class="item-flex__inner-date">
              <label class="item-flex__date-label">Время*</label>
              <select class="item-flex__date-select" name="time">
                <option class="item-flex__select-item" value="13-15">
                  C 13:00 - 15:00
                </option>
                <option class="item-flex__select-item" value="15-17">
                  C 15:00 - 17:00
                </option>
                <option class="item-flex__select-item" value="18-20">
                  C 17:00 - 20:00
                </option>
              </select>
              <div class="arrows"></div>
            </div>
          </div>
          <div class="form__item">
            <label class="form__label">Опишите проблему вкратце</label>
            <textarea class="form__problem" name="problem"></textarea>
          </div>
          <h3 class="form__title-psy min-title">Выберите психолога</h3>
          <div class="form__item item-flex">
            <input
              type="radio"
              name="psy"
              id="Navay"
              value="Navay"
              class="form__input-radio"
            />
            <label for="Navay" class="form__radio-cart">
              <div class="form__cart-photo">
                <picture> 
                  <source type="image/avif" srcset="/images/AnnaNavay.avif">
                  <source type="image/webp" srcset="/images/AnnaNavay.webp">
                  <img src="/images/AnnaNavay.jpg" class="form__photo" data-src="/images/AnnaNavay.jpg" alt="">
                </picture>
              </div>
              <span class="form__radio-label"> Анна Навай </span>
            </label>

            <input
              type="radio"
              name="psy"
              id="Ivanova"
              value="Ivanova"
              class="form__input-radio"
            />
            <label for="Ivanova" class="form__radio-cart">
              <div class="form__cart-photo">
                <picture> 
                  <source type="image/avif" srcset="/images/ElenaIvanova.avif">
                  <source type="image/webp" srcset="/images/ElenaIvanova.webp">
                  <img src="/images/ElenaIvanova.jpg" class="form__photo" data-src="/images/ElenaIvanova.jpg" alt="">
                </picture>
              </div>
              <span class="form__radio-label"> Елена Иванова </span>
            </label>

            <input
              type="radio"
              name="psy"
              id="notImportant"
              value="notImportant"
              class="form__input-radio"
            />
            <label for="notImportant" class="form__radio-cart">
            <div class="form__cart-photo">
              <picture> 
                <source type="image/avif" srcset="/images/deshurny.avif">
                <source type="image/webp" srcset="/images/deshurny.webp">
                <img src="/images/deshurny.png" class="form__photo" data-src="/images/deshurny.png" alt="">
              </picture>
            </div>
              <span class="form__radio-label">Дежурный</span>
            </label>
          </div>
          <input type="submit" value="Отправить" class="form__button" />
        </form>
      </div>
    </section>
    <script src="asset-script/testresult.js" defer></script>
    <script src="asset-script/form.js" defer></script>
    <script src="result-script/<?php echo $_GET["name"];?>-result.js" defer></script>
  </body>
</html>
