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
    NextSequence();
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
  $("#level-title").text("GAME OVER!");
  gamePattern.length = 0;
  userPattern.length = 0;
  level = 1;
  $("#start").removeClass("playingButton");
  $("#start").addClass("restartButton");
  $("#start").text("Restart");
}

//Check for button selection
$("#green").click(() => {
  $("#green").addClass("pressed");
  setTimeout(() => {
    $("#green").removeClass("pressed");
  }, 150);
  userPattern.push("green");
  CheckUserSelection();
});
$("#red").click(() => {
  $("#red").addClass("pressed");
  setTimeout(() => {
    $("#red").removeClass("pressed");
  }, 150);
  userPattern.push("red");
  CheckUserSelection();
});
$("#yellow").click(() => {
  $("#yellow").addClass("pressed");
  setTimeout(() => {
    $("#yellow").removeClass("pressed");
  }, 150);
  userPattern.push("yellow");
  CheckUserSelection();
});
$("#blue").click(() => {
  $("#blue").addClass("pressed");
  setTimeout(() => {
    $("#blue").removeClass("pressed");
  }, 150);
  userPattern.push("blue");
  CheckUserSelection();
});
