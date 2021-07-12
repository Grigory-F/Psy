<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="google" content="notranslate" />
    <meta name="robots" content="index,follow" />
    <link rel="stylesheet" href="css/test.css"/>
    <title>Тест</title>
  </head>
  <body class="page">
    <section class="test-layout">
      <div class="test-layout__container-form">
        <div class="test-layout__slider">
          <div class="test-layout__counter"></div>
          <div class="test-layout__container">
          <?php
      $tested = $_GET["name"];
      $iterat = $_GET["iterat"];
      $type = $_GET["type"];
      require 'config.php';
      $query = $pdo->query('SELECT * FROM '.$tested.'');
      while($row = $query->fetch(PDO::FETCH_OBJ)) {
      $id = $row->id;
      $answer = $row->answer;
      $value = $row->value;
      $res_ansver = explode("|", $answer);
      $res_value = explode("|", $value);
      $ide = 0;
  ?> 
            <div class="question">
              <h1 class="question__title"><?php echo $row->question;?></h1>
              <?php if ($_GET["desc"] == "true") {
                echo '<p class="question__desc">Оцените, насколько вы согласны с данными суждением от 1 до 10, где 10 - согласны полностью, а 1 - абсолютно не согласны.</p>';
              } ?>
              <?php if ($_GET["test_image"] == "true") {
                echo '<picture> 
                <source type="image/avif" srcset="img-test/'.$id.'-sex.avif">
                <source type="image/webp" srcset="img-test/'.$id.'-sex.webp">
                <img src="img-test/'.$id.'-sex.jpg" alt="Картинка из теста" class="question__image">
                </picture>';
              } ?>
              <div class="question__answers">
              <?php foreach ($res_ansver as $variable) {
                $ide++;
                $fdw++;
              ?>
                <div class="answer">
                  <input class="answer__input" type="<?php echo $type;?>" name="<?php echo $id;?>" value="<?php echo $res_value[$ide - 1];?>" id="<?php echo $id + $fdw;?>">
                  <label class="answer__label" for="<?php echo $id + $fdw;?>"><?php echo $variable; ?><div class="answer__arrow"></div></label>
                </div>
                <?php } ?>
                <p class="question__warning">Выберите одно из утверждений</p>
                <div class="question__controls question-conrols">
                  <div class="question-conrols__back buttton-test">Предыдущий</div>
                  <div class="question-conrols__following buttton-test">Следующий</div>
                  <a href="testresult.php?name=<?php echo $tested;?>" class="question-conrols__following--link-hidden buttton-test">Завершить</a>
                </div>
              </div>
            </div>
            <?php $ide - $iterat;?>
            <?php } ?>
          </div>
        </div>
      </div>
    </section>
    <script src="asset-script/slider.js" defer></script>
    <script src="asset-script/iterator-test.js" defer></script>
    <script src="material-test/<?php echo $tested ?>.js" defer></script>
  </body>
</html>
