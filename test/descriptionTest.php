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
    <!-- Необходимо сделать фавикон через известный сервис и подключить,
так же карточки для ссылки в вк, фейсбук, твиттер. Найти как это сделать в папке Оптимизация сайта,
сделать другой цвет вкладки для разных браузеров. Все в метатегах-->
    <link rel="stylesheet" href="css/descriptionTest.css" />
    <title>Описание теста</title>
  </head>
  <body class="page">
    <div class="container layout">
      <div class="description">
        <h1 class="description__title title">Описание теста</h1>
        <p class="description__subtitle subtitle">
          <?php 
          $descTestName = $_GET["desc_test_name"];
          $iterat = $_GET["iterat"];
          $type = $_GET["type"];
          $desc = $_GET["desc"];
          $img = $_GET["test_image"];
          require 'config.php';
          $query = $pdo->prepare('SELECT description FROM desc_test_name WHERE test_name = ?');
          $query->execute(array($descTestName)); 
          $name = $query->fetchColumn();
          echo $name;
          ?>
        </p>
        
        <a href="/test/index.php?name=<?php echo $descTestName ?>&iterat=<?php echo $iterat ?>&desc=<?php echo $desc ?>&type=<?php echo $type ?>&test_image=<?php echo $img ?>" class="description__button-link subtitle">Пройти тест</a>
      </div>
    </div>
  </body>
</html>
