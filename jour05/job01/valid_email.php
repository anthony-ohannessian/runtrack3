<?php
require 'db.php';

$email = $_POST['email'];

$emailSubmit=$pdo -> prepare('SELECT `email` FROM `utilisateurs` WHERE `email`=:email');
$emailSubmit -> execute(['email' => $email]);
$result = $emailSubmit->fetch(PDO::FETCH_ASSOC);

if($result['email'] == $email){
    echo '0';
}else{
    echo true;
}

?>