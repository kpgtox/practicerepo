
var score = document.getElementById("score_val");
var time_div = document.getElementById("time_remaining");
var time_val = document.getElementById("time_remaining_val");
var game_state = ["playing","game_over"];
var quest = document.getElementById("question");
var time = 60;

score.innerHTML = 0;
time_div.style.display = "block";
time_val.innerHTML = time;


setInterval(function(){
  time -=  1;
  time_val.innerHTML = time;
}, 1000);

var x = (1 + Math.round(9*Math.random()));
var y = (1 + Math.round(9*Math.random()));
var correct_ans = x*y;
quest.innerHTML = x + " x " + y;

var correct_pos = (1+Math.round(3*Math.random()));
document.getElementById("box"+correct_pos).innerHTML = correct_ans;

var i=1;
while(i<5){
  document.getElementById("box"+i).onclick=function(){
    if(this.innerHTML == correct_ans){
      console.log("right answer");
    }
    else {
      console.log("wrong answer");
    }
    // console.log(this.innerHTML);
  }
  i++;
}
