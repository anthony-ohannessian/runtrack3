document.addEventListener('DOMContentLoaded', function loaded() {

    var data = new FormData()

    var prenom = document.getElementById('prenom');
    var nom = document.getElementById('nom');
    var email = document.getElementById('email');
    var pass = document.getElementById('pass');
    var pass2 = document.getElementById('pass2');

    var submit = document.getElementById('submit');

    var error = document.getElementsByClassName('error');
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    const regexmdp = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/


    prenom.addEventListener('keyup', function(){
        var prenomValue = this.value;
        if (prenomValue === '') {
            error[0].style.display = 'block'
            error[0].innerHTML = 'Veuillez rentrer un prénom';
            validation = false;
        } else {
            error[0].style.display = 'none'  
            validation = true; 
        }
    })

    nom.addEventListener('keyup', function(){
        let nomValue = this.value;
        if (nomValue === '') {
            error[1].style.display = 'block'
            error[1].innerHTML = 'Veuillez rentrer un nom';
            validation = false;
        } else {
            error[1].style.display = 'none'
            validation = true; 
        }
    })

    email.addEventListener('keyup', function(){
        var emailValue = this.value;

        const found = emailValue.match(regexEmail);

        if(emailValue === '') {
            error[2].style.display = 'block'
            error[2].innerHTML = 'Veuillez rentrer un email';
            validation = false;
        } else {  
            if(found === null)
            {
                error[2].style.display = 'block'
                error[2].innerHTML = 'Veuillez rentrer un email valide';
                validation = false;
            } else {
                data.append('email',emailValue)

                fetch('emailValide.php',{
                    method: 'POST',
                    body: data
                })
                .then ((response) => response.text())
                .then ((response) => {
                    console.log(response)
                    if(response === '0') {
                        error[2].style.display = 'block'
                        error[2].innerHTML = 'Cet email est déjà pris';
                        validation = false;
                    } else {
                        error[2].style.display = 'none'
                        validation = true; 
                    }
                })
                .catch((error) => console.log(error)) 
            }
        }
    })


    pass.addEventListener('focusout', function(){
        var passValue = this.value;

        const find = passValue.match(regexmdp);

        if(passValue === ''){
            error[3].style.display = 'block'
            error[3].innerHTML = 'Veuillez rentrer un mot de passe';
            validation = false;
        }
        else {
            if(find === null){
                error[3].style.display = 'block'
                error[3].innerHTML = 'Veuillez rentrer un mot de passe valide';
                validation = false;
            } else {
                error[3].style.display = 'none'
                validation = true; 
            } 
        }
    })


    pass2.addEventListener('focusout', function(){
        var pass2Value = this.value;
        if(pass2Value === ''){
            error[4].style.display = 'block'
            error[4].innerHTML = 'Veuillez faire une confirmation de mot de passe';
            validation = false;
        } else {
            if (pass2Value !== pass.value) {
                error[4].style.display = 'block'
                error[4].innerHTML = 'Le mot de passe et sa confirmation ne sont pas les mêmes';
                validation = false;
            } else {
              error[4].style.display = 'none' 
              validation = true; 
            }  
        }
    })

    submit.addEventListener('click', function(){
        if (validation !== true){
            console.log('ok');
        } else {
            fetch('signin.php',{
                method: 'POST',
                body: JSON.stringify({prenom: prenom.value, nom: nom.value, email: email.value, password: pass.value})
            })
            .then ((response) => response.text())
            .then ((response) => {
                console.log(response)
            })
            .catch((error) => console.log(error)) 
        }
     })
})