// program flowchart:
// click on start/reset
// if playing, reload else : show lives, change button text, create fruit, move fruit by one step, check fruit level,

// print something first to check if this js file is linked to the html page:
// console.log("hellllo");

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
var animate;
var step = 0;

$(function(){
  Loadup();
  Start_game();
});

function Start_game(){
  // if start button clicked:
  $("#start_button").click(function(){
    // while playing:
    if(playing){
      // reload page:
      location.reload();
    }
    // when game over / page reload:
    else{
      Reset_game();
    }
  });
}

function Reset_game(){
  playing = true;
  score = 0;
  lives = 3;
  step = 0;
  Show_Lives();
  $("#score_val").html(score);
  $("#start_button").html("Reset Game");
  Start_Action();
}

function Loadup(){
  $("#start_button").html("Start Game");
  $("#gameover").hide();
}

function Show_Lives(){
  $("#lives").empty();
  for(i=0; i<lives; i++){
    $("#lives").append(' <img src="images/heart.png" class="hearts">');
  }
  $("#lives").show();
}

function Start_Action(){
  Choose_Fruit();
  Position_fruit();
  Move_fruit();
}

function Choose_Fruit(){
  var x = Math.round(5*Math.random());
  $("#fruit1").attr('src','images/' + fruits[x] + '.png');
  $("#fruit1").show();
}

function Position_fruit(){
  var x = Math.round(fruit_container_width * Math.random());
  $("#fruit1").css({'left': x,'top':-200});
}

function Move_fruit(){
  Generate_step();
  Add_step();
}

function Generate_step(){
  //gen a random step to move the fruit with:
  step = 1 + Math.round(5*Math.random());
}

function Add_step(){
  //Set Interval is a looper function(like a unity coroutine) that only stops when told to:
  //Move fruit down by one random step every 10ms:
  animate = setInterval(function(){
    // edit the top attribute of fruit1's css, add step to its current top position's value:
    $("#fruit1").css('top', $("#fruit1").position().top + step);
    Check_fruit_pos();
  }, 10);
}

function Check_fruit_pos(){
  var x = $("#fruit1").position().top;
  var y = $("#main").height();
  if(x>y){
    Update_lives();
    Choose_Fruit();
    Position_fruit();
    Generate_step();
  }
}

function Update_lives(){
  if(lives > 1){
    lives--;
    Show_Lives();
  }
  else{
    lives = 0;
    Show_Lives();
    End_game();
  }
}

function End_game(){
  playing = false;
  clearInterval(animate);
  $("#start_button").html("Start Game");
  $("#gameover").html("Game Over");
  $("#gameover").show();
}
