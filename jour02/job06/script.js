var password = "";

window.addEventListener("keydown",
    function(event){

        // var touche = event.keyCode;

        // var mot = password + touche;
        // password = mot;
    
        // if (password == 38384040373937396665) {

            var body = document.querySelector('body');
            var main = document.querySelector('main');
            var header = document.querySelector('header');
            var footer = document.querySelector('footer');

            var title = document.createElement("h1");
            var para = document.createElement("p");

            header.append(title);
            title.append("La Plateforme_");

            main.append(para);
            para.append('La Plateforme Marseille, un lieu unique et des écoles d’excellence dans les métiers du numérique');
        
            body.style.margin = "0";
            body.style.padding = "0";

            header.style.height = "20vh";
            header.style.background = "#88C1D0";

            main.style.height = "60vh";
            footer.style.height = "20vh";
            footer.style.background = "#88C1D0"

            title.style.color = "white";
            title.style.textAlign = "center";
            title.style.fontSize = "50px";
            
            para.style.width = "80%";
            para.style.margin = " 3% auto";
            para.style.fontSize = "3em";
            para.style.color = "#FFCA4B";
        // }
})