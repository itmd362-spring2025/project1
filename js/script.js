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

/*Shows password on click*/
function myFunction() {
  var x = document.getElementById("pwd");
  if (x.type === "password") {
    x.type = "text"
  } else {
    x.type = "password";
  }
};