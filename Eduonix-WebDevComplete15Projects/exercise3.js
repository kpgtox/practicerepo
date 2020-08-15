// grab elements and declare global variables
var start_button = document.getElementById("startreset");
var score = document.getElementById("score_val");
var time_div = document.getElementById("time_remaining");
var time_val = document.getElementById("time_remaining_val");
var game_state = ["playing","game_over"];
var quest = document.getElementById("question");
var time = 60;
var correct_ans = 0;

start_button.onclick = function(){startGame();}

function startGame(){
  resetScoreTime();
  setTimer();
  gen_quest();
  getInput();
}

function resetScoreTime(){
  score.innerHTML = 0;
  time_div.style.display = "block";
  time_val.innerHTML = time;}

function setTimer(){
setInterval(function(){
  time -=  1;
  time_val.innerHTML = time;
}, 1000);}

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
      console.log("right answer");
    }
    else {
      console.log("wrong answer");
    }
    // console.log(this.innerHTML);
  }
  i++;
}}
