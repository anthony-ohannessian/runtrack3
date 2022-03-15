function compteur(){
  var compteurTag = document.getElementById('compteur')
  compteurTag.innerHTML = 0

  document.getElementById('button').addEventListener("click", 
  function(){
    console.log('click détecté')
    return compteurTag.innerHTML++
  })
}

compteur()

