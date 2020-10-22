// program flowchart:
// click on start/reset
// if playing, reload else : show lives, change button text, create fruit, move fruit by one step, check fruit level,

// print something first to check if this js file is linked to the html page:
console.log("hellllo");

// All jquery codemust goin the following function:
// $(function(){});

// jq syntax for a button call:
// click method takes a method as a parameter.
// $("#button_id").click(function(){});

// jq syntax to replace the content of an html tag:
// $("#element_id").html([value/text]);

// jq, draw an html element:
// $("#element_id").show();

// jq, add content to the end of an html element:
// $("#element_id").append();

// --*--

var playing = false;
var score = 0;
var lives = 3;

$(function(){
  $("#start_button").click(function(){
    if(playing){
      location.reload();
    }
    else{
      playing = true;
      score = 0;
      $("#score_val").html(score);
      $("#lives").show();
      lives = 3;
      Add_Lives();
    }
  });
});

function Add_Lives(){
  for(i=0; i<lives; i++){
    $("#lives").append(" X ");
  }
}
