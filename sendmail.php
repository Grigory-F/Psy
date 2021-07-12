<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = "UTF-8";
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

$mail->setForm('grishka2500@gmail.com', 'Супер письмо');
$mail->addAddress('grigoryyyysssss@gmail.com');
$mail->Subject = "Хайль!";

$body = '<h1>Встречайте супер письмо!</h1>';
if (trim(!empty($_POST['name']))) {
    $body = '<p>Имя или псевдоним:'.$_POST['name'].'</p>';
}
if (trim(!empty($_POST['messenger']))) {
    $body = '<p>Имя или псевдоним:'.$_POST['messenger'].'</p>';
}
if (trim(!empty($_POST['telephone']))) {
    $body = '<p>Имя или псевдоним:'.$_POST['telephone'].'</p>';
}
if (trim(!empty($_POST['date']))) {
    $body = '<p>Имя или псевдоним:'.$_POST['date'].'</p>';
}
if (trim(!empty($_POST['time']))) {
    $body = '<p>Имя или псевдоним:'.$_POST['time'].'</p>';
}


$mail->Body = $body;
if (!$mail->send()) {
    $message = 'Ошибка';
}else {
    $message = 'Данные отправлены';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>