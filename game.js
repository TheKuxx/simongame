var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    animatePress(userChosenColour);
    playSound(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
 
  });

  function checkAnswer(currentLevel) {


    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
      console.log("nice")
    
 
    if(userClickedPattern.length == gamePattern.length){
     setTimeout(function(){
       nextSequence();
     }, 1000)
 
    }
  }else {
         
     playSound("wrong");
 
 
          $("body").addClass("game-over");
          setTimeout(function() {
           $("body").removeClass("game-over");
          }, 200);
 
 
          $("#level-title").text("Game Over, Press Any Key to Restart");
          
          startOver();
    }
 }
 

function nextSequence() {
  
    userClickedPattern =[];
   level++;
   $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  
  
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
   
}
function startOver() {
  level = 0;
  started = false;
  gamePattern = [];


}






function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  
}


function animatePress(currentcolour){
    $("#" + currentcolour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentcolour).removeClass("pressed")
    }, 100)
}








