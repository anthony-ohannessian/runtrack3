function citation(){
  document.getElementById('button').addEventListener("click", 
  function(){
    var citationTag = document.getElementById('citation')
    var citation = citationTag.innerHTML
    console.log(citation)
  })
}

citation()


