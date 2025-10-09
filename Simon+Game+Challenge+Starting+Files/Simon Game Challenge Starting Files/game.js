var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

const audio = new Audio("path/to/your/sound.mp3");

$(document).keydown(function () {
  if (!started) {
    $("#level-title").text("Level- " + level);
    nextSequence();
    started = true;
  }
});
function nextSequence() {
    level++;
     $("#level-title").text("Level- " + level);
  userClickedPattern = [];
  // random number
  var randomNumber = Math.floor(Math.random() * 4);
  console.log(randomNumber);

  //   random color
  var randomChosenColour = buttonColours[randomNumber];

  //Create A New Pattern
  gamePattern.push(randomChosenColour);
  console.log(randomChosenColour);
  console.log(gamePattern);
  console.log(gamePattern.length);

  //Show the Sequence to the User with Animations and Sounds
  $("#" + randomChosenColour)
    .animate({ opacity: 0.2 }, 100)
    .animate({ opacity: 1 }, 100);

  playSound(randomChosenColour);
  animatePress(randomChosenColour);
}

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");

  console.log(userChosenColour);
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

function playSound(name) {
  var audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 200);
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("Success");
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    startOver()
    }
}
function startOver(){
level=0;
    console.log("Wrong");
     playSound("wrong");
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
     $("#level-title").text("Game Over, Press Any Key to Restart");
  started = false;
  gamePattern=[];
}