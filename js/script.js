/*Detects CapsLock*/
var input = document.getElementById("pwd")
var text = document.getElementById("text")
input.addEventListener("keyup", function(event) {

if (event.getModifierState("CapsLock")) {
    text.style.display = "block";
  } else {
    text.style.display = "none"
  }
});