function showhide(){
  document.getElementById('button').addEventListener("click", 
  function(){
    console.log('click sur button detecté')

    var buttonTag = document.getElementById('button')
    console.log(buttonTag)
    var buttonInnerText = buttonTag.innerText
    console.log(buttonInnerText)

    var citationTag = document.getElementById('citation')
    var citation = ''

    if (buttonInnerText == 'show') {
      citation = `L'important n'est pas la chute, mais l'atterrissage.`
      citationTag.innerHTML = citation
      return buttonTag.innerText = 'hide'
    } else if (buttonInnerText == 'hide') {
      citation = ''
      citationTag.innerHTML = citation
      return buttonTag.innerText = 'show'
    }

  })
}

showhide()