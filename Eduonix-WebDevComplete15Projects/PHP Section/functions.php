<?php

//creating a function:
function Welcome(){
  echo " welcome home ";
}
// function call:
Welcome();

// function with arguments;
function Welcome_user($name, $credit){
  // use double quotes to use the variables inside:
  echo "<p>Hi $name, your credit is $credit</p>";
}
Welcome_user("max",99);

// function returning something:
function Add_it($x,$y){
  return $x + $y;
}
echo Add_it(5,5);



 ?>
