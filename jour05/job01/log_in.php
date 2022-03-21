<?php
require 'db.php';

$content = trim(file_get_contents("php://input"));

$data = json_decode($content, true);

$prenom = $data["prenom"];
$nom = $data["nom"];
$email = $data["email"];
$password = $data["password"];

$submit=$pdo -> prepare('INSERT INTO utilisateurs SET prenom=:prenom, nom=:nom, email=:email, password=:password');
$submit -> execute(['prenom' => $prenom, 'nom' => $nom, 'email' => $email, 'password' => $password]);

echo 'ok';
?>