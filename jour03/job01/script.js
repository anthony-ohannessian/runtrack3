$('#show').click(
    function (){
        console.log('click détecté on show')
        $('#show').after(
            `<p class='p_affichage'>le $ est un bon élément monétaire. Le # de twitter est une bonne I D. Il faudra faire le point avec la classe pour cacher cet élément.</p>`
        )
    }
)

$('#hide').click(
    function (){
        console.log('click détecté on hide')
        $('.p_affichage').hide()
    }
)