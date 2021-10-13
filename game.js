var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPattern = [];
var level = 1;
$("#start").click(function () {
    StartGame();
});

function StartGame(){
    $("#level-title").text("Level " + level);
    $("#start").text("PLAYING");
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
            $("#level-title").text("GAME OVER!");
    }
    if(userPattern.length == gamePattern.length){
        userPattern.length = 0;
        setTimeout(()=> {
            $("#level-title").text("Level " + level++);
            NextSequence();
        },400);
    }
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
