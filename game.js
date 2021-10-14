var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPattern = [];
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
  var randomNumber = Math.random() * 4;
  randomNumber = Math.floor(randomNumber);

  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log(gamePattern);
  SelectSequenceUI();
}

function SelectSequenceUI() {
  $("." + gamePattern[gamePattern.length - 1]).addClass("pattern");
  switch(gamePattern[gamePattern.length - 1]){
    case "green":
    GreenAudio();
      break;
    case "red":
      RedAudio();
      break;
    case "yellow":
      YellowAudio();
      break;
    case "blue":
      BlueAudio();
      break;
      default:
        break;
  }
  setTimeout(() => {
    $("." + gamePattern[gamePattern.length - 1]).removeClass("pattern");
  }, 150);
}

function CheckUserSelection() {
    for(let i=0; i<userPattern.length; i++){
        if(userPattern[i] != gamePattern[i]){
            GameOver();
    }
    else if(userPattern.length == gamePattern.length){
        userPattern.length = 0;
        setTimeout(()=> {
            $("#level-title").text("Level " + level++);
            NextSequence();
        },500);
    }
  }
}

function GameOver(){
  $("body").addClass("redBody");
  $("#level-title").text("GAME OVER!");
  var wrongAudio = new Audio("sounds/wrong.mp3");
  wrongAudio.play();
  gamePattern.length = 0;
  userPattern.length = 0;
  level = 1;
  setTimeout(() => {
    $("body").removeClass("redBody");
  }, 200);
  $("#start").removeClass("playingButton");
  $("#start").addClass("restartButton");
  $("#start").text("Restart");
}

function GreenAudio(){
  var greenAudio = new Audio("sounds/green.mp3");
  greenAudio.play();
}
function RedAudio(){
  var redAudio = new Audio("sounds/red.mp3");
  redAudio.play();
}
function YellowAudio(){
  var yellowAudio = new Audio("sounds/yellow.mp3");
  yellowAudio.play();
}
function BlueAudio(){
  var blueAudio = new Audio("sounds/blue.mp3");
  blueAudio.play();
}
//Check for button selection
$("#green").click(() => {
  GreenAudio();
  $("#green").addClass("pressedGreen");
  setTimeout(() => {
    $("#green").removeClass("pressedGreen");
  }, 150);
  userPattern.push("green");
  CheckUserSelection();
});
$("#red").click(() => {
  RedAudio();
  $("#red").addClass("pressedRed");
  setTimeout(() => {
    $("#red").removeClass("pressedRed");
  }, 150);
  userPattern.push("red");
  CheckUserSelection();
});
$("#yellow").click(() => {
  YellowAudio();
  $("#yellow").addClass("pressedYellow");
  setTimeout(() => {
    $("#yellow").removeClass("pressedYellow");
  }, 100);
  userPattern.push("yellow");
  CheckUserSelection();
});
$("#blue").click(() => {
  BlueAudio();
  $("#blue").addClass("pressedBlue");
  setTimeout(() => {
    $("#blue").removeClass("pressedBlue");
  }, 150);
  userPattern.push("blue");
  CheckUserSelection();
});
