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
var right_input = false;
var timer;

start_button.onclick = function(){startGame();}

function startGame(){
  resetScoreTime();
  hideCards();
  clearTimer();
  startTimer();
  gen_quest();
  getInput();}

function resetScoreTime(){
  score = 0;
  time = 60;
  score_span.innerHTML = score;
  time_div.style.display = "block";
  time_span.innerHTML = 60;}

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
    time_span.innerHTML = time;}
}

function gen_quest(){
var x = (1 + Math.round(9*Math.random()));
var y = (1 + Math.round(9*Math.random()));
correct_ans = x*y;
quest.innerHTML = x + " x " + y;
var correct_pos = (1+Math.round(3*Math.random()));
document.getElementById("box"+correct_pos).innerHTML = correct_ans;}

function getInput(){
var i=1;
while(i<5){
  document.getElementById("box"+i).onclick = function(){
    if(this.innerHTML == correct_ans){
      // right_input = true;
      checkInput(true);}
    else {
      // right_input = false;
      checkInput(false);}}
  i++;}}

function checkInput(right_input){
  if(right_input){
    updateScore();
    correct.style.display = "block";
  }
  else{
    wrong.style.display = "block";
  }
}

function updateScore(){
  score++;
  score_span.innerHTML = score;
}
