var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userSelection = [];
var level = 1;

$("#start").click(function () {
    if($("#start").hasClass("playingButton") == false){
      StartGame();
    }
});

function StartGame(){
    $("#level-title").text("Level " + level);
    $("#start").text("Playing");
    $("#start").addClass("playingButton");
    setTimeout(() => {
      NextSequence();
    }, 500);
}

function NextSequence() {
  userSelection = [];
  $("#level-title").text("Level " + level++);
  var randomNumber = Math.random() * 4;
  randomNumber = Math.floor(randomNumber);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  //Selection Animation
  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  //Selection Sound
  playSound(randomChosenColour);
}

function CheckUserAnswer(currentLevel){
  if(gamePattern[currentLevel] === userSelection[currentLevel]){
    if(userSelection.length === gamePattern.length){
      setTimeout(function(){
        NextSequence();
      },1000);
    }
  } else {
    GameOver();
  }
}

function GameOver(){
  $("body").addClass("redBody");
  $("#level-title").text("GAME OVER!");
  playSound("wrong");
  StartOver();
  setTimeout(() => {
    $("body").removeClass("redBody");
  }, 200);
  $("#start").removeClass("playingButton");
  $("#start").addClass("restartButton");
  $("#start").text("Restart");
}

function StartOver(){
  gamePattern = [];
  level = 1;
}

//Check for button selection
$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userSelection.push(userChosenColour);
  playSound(userChosenColour);
  PressAnimation(userChosenColour);
  CheckUserAnswer(userSelection.length-1);
});

function playSound(name){
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}

function PressAnimation(currentColour){
  $("#"+currentColour).addClass("pressed"+currentColour);
  setTimeout(function(){
    $("#"+currentColour).removeClass("pressed"+currentColour);
  },100);
}
