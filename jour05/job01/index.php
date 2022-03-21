<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">

    <script src="script.js" charset="utf-8"></script>
    
    <title>inscription</title>
</head>
<body>
        <label for="name">Prénom :</label>
            <input type="text" id="prenom" name="prenom">
            <p class="error"></p>

        <label for="name">Nom:</label>
            <input type="text" id="nom" name="nom">
            <p class="error"></p>

        <label for="name">E-mail :</label>
            <input type="email" id="email" name="email" required>
            <p class="error"></p>

        <label for="msg">Mot de passe :</label>
            <input type="password" id="pass" name="password" required>
            <p>Le mot de passe doit avoir au moins 8 caractères, au moins une minuscule, une majuscule, un nombre et un caractère spécial.</p>
            <p class="error"></p>

        <label for="msg">Confirmation du mot de passe :</label>
            <input type="password" id="pass2" name="password2" required>
            <p class="error"></p>

        <button id='submit' name="inscription">Sign in</button>
</body>
</html>