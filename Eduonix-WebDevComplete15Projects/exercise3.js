// grab elements and declare global variables
var start_button = document.getElementById("startreset");
var score_span = document.getElementById("score_val");
var time_div = document.getElementById("time_remaining");
var time_span = document.getElementById("time_remaining_val");
var quest = document.getElementById("question");
var correct = document.getElementById("correct");
var wrong = document.getElementById("wrong");

var score = 0;
var time = 60;
var correct_ans = 0;
var take_input = true;
var timer;

start_button.onclick = function(){startGame();}

function startGame(){
  resetScoreTime();
  hideCards();
  clearTimer();
  startTimer();
  gen_quest();
  getInput();
}

function resetScoreTime(){
  score = 0;
  time = 60;
  take_input = true;
  score_span.innerHTML = score;
  time_div.style.display = "block";
  time_span.innerHTML = time;
}

function hideCards(){
  correct.style.display = "none";
  wrong.style.display = "none";
}

function clearTimer(){
  clearInterval(timer);
}

function startTimer(){
  timer = setInterval(function(){updateTimer();},1000);
  function updateTimer(){
    time -=1;
    time_span.innerHTML = time;
    trackTime();
  }
}

function trackTime(){
  if(time<=0){gameOver();}
}

function gen_quest(){
var x = (1 + Math.round(9*Math.random()));
var y = (1 + Math.round(9*Math.random()));
correct_ans = x*y;
quest.innerHTML = x + " x " + y;
clearOptions();
fillOptions();
}

function clearOptions(){
  var boxes = document.getElementsByClassName("box");
  for( x in boxes){
    boxes[x].innerHTML = "";
  }
}

function fillOptions(){
  var correct_pos = (1+Math.round(3*Math.random()));

  var x = 1;
  while(x<5){
    if(x == correct_pos){document.getElementById("box"+correct_pos).innerHTML = correct_ans;}
    else {
      var wrong_ans = correct_ans + Math.round(9*Math.random());
      if(wrong_ans == correct_ans){ wrong_ans += 5; }
      document.getElementById("box"+x).innerHTML = wrong_ans;
    }
    x++;
  }
}


function getInput(){
if(take_input){
  var i=1;
  while(i<5){
    document.getElementById("box"+i).onclick = function(){
      if(this.innerHTML == correct_ans){
        checkInput(true);
      }
      else {
        checkInput(false);
      }
    }
    i++;
  }
}
}

function checkInput(right_input){
  if(right_input && take_input){
    updateScore();
    show(correct);
    gen_quest();
  }
  else{
    gameOver();
  }
}

function updateScore(){
  score++;
  score_span.innerHTML = score;

}

function show(x){
  x.style.display = "block";
  var show_timer = setInterval(function(){clearShowTimer();},1000);
  function clearShowTimer(){
    clearInterval(show_timer);
    x.style.display = "none";
  }
}

function gameOver(){
  wrong.style.display = "block";
  clearTimer();
  take_input = false;
}
