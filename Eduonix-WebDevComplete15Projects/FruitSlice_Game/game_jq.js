// program flowchart:
// click on start/reset
// if playing, reload else : show lives, change button text, create fruit, move fruit by one step, check fruit level,

// print something first to check if this js file is linked to the html page:
console.log("hellllo");

// All jquery code must go in the following function:
// $(function(){});

// jq syntax for a button call:
// click method takes a method as a parameter.
// $("#button_id").click(function(){});

// jq syntax to replace the content of an html tag:
// $("#element_id").html([value/text]);

// jq, draw an html element:
// $("#element_id").show();

// jq, (append)add content to the end of an html element:
// $("#element_id").append();

// jq, append (include) an image element to another element.
//$("#element_id").append('<img src="[folder address]/[img name].png">');

// edit the attribute or property of an html element/tag:
// $("#element_id").attr('[attribute_name]','[value]');

// return a random number strictly between 0 and 1, (excluding 0 and 1):
// Math.random()

// to return a random number between 0 and a specified number, simply multiply:
// 6*Math.random()

//Round up a decimal number:
// Math.round()

// Resourceful actions:
// Adding a new element to the html page dynamically through javascript costs more memory.


// --*--

var playing = false;
var score = 0;
var lives = 3;
var fruits = ['apple','banana','grapes','watermelon','orange','pineapple'];
var fruit_container_width = 550;
var fruit_container_height = 300;

$(function(){
  $("#start_button").click(function(){
    // while playing:
    if(playing){
      // reload page:
      location.reload();
    }
    // when game over / page reload:
    else{
      playing = true;
      score = 0;
      $("#score_val").html(score);
      $("#lives").show();
      lives = 3;
      Add_Lives();
      $("#start_button").html("Reset Game");
      Start_Action();
    }
  });
});

function Add_Lives(){
  for(i=0; i<lives; i++){
    $("#lives").append(' <img src="images/heart.png" class="hearts">');
  }
}

function Start_Action(){
  Choose_Fruit();
  $("#fruit1").show();
  Position_fruit();
}

function Choose_Fruit(){
  var x = Math.round(5*Math.random());
  $("#fruit1").attr('src','images/' + fruits[x] + '.png');
}

function Position_fruit(){
  var x = Math.round(fruit_container_width * Math.random());
  $("#fruit1").css({'left': x,'top':-30});
}
