let textarea = document.getElementById("keylogger");

document.addEventListener("keypress", addCharacter);

function addCharacter(event) {
  textarea.value=textarea.value+event.key; 
}