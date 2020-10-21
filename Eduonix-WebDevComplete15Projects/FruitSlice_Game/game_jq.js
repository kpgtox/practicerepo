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

// --*--

var playing = false;

$(function(){
  $("#start_button").click(function(){
    if(playing){
      location.reload();
    }
    else{
      playing = true;
      
    }
  });
});
