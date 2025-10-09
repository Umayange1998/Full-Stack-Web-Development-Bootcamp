var numberofDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofDrums; i++) {
  var tom1 = new Audio("sounds/tom-1.mp3");
  var tom2 = new Audio("sounds/tom-2.mp3");
  var tom3 = new Audio("sounds/tom-3.mp3");
  var tom4 = new Audio("sounds/tom-4.mp3");
  var snare = new Audio("sounds/snare.mp3");
  var crash = new Audio("sounds/crash.mp3");
  var kick_bass = new Audio("sounds/kick-bass.mp3");
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInner = this.innerHTML;
    makeSound(buttonInner);
    buttonAnimation(buttonInner);
  });
  document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
    console.log("Key pressed:", event.key);
  });

  function buttonAnimation(buttonInner){
    var activedKey = document.querySelector("."+buttonInner);
    activedKey.classList.add("pressed")
    setTimeout(function(){
        activedKey.classList.remove("pressed")
     }, 100);
  }
  function makeSound(key) {
    switch (key) {
      case "w":
        tom1.play();
        break;
      case "a":
        tom2.play();
        break;
      case "s":
        tom3.play();
        break;
      case "d":
        tom4.play();
        break;
      case "j":
        snare.play();
        break;
      case "k":
        crash.play();
        break;
      case "l":
        kick_bass.play();
        break;
    }
  }
}
