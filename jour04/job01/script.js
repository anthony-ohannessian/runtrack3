var button = document.getElementById('button')
button.addEventListener("click",
    function(){
        var p = document.createElement('p');
        var body = document.querySelector('body')

        fetch('expression.txt')
        .then (function(response) {
            return response.text()
        })

        .then (function(data) {
            body.append(p);
            p.append(data)  
        })  
})