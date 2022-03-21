<?php
    $host='localhost';
    $user='root';
    $password='';
    $dbname='utilisateurs';
    $dsn='mysql:host='.$host.'; dbname='.$dbname.'; charset=utf8';
    $pdo=new PDO($dsn, $user, $password);
?>