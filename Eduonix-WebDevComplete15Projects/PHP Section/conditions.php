<?php

$b1 = true;
if(b1){
  echo "its true";
} else {
  echo "its false";
}

//if else shortform statement:
//if  b1 is true then assign string A to var b2 or else string B.
$b2 = ($b1)?"A":"B";

$temp = 25;
if($temp<10){
  echo "cold";
}elseif ($temp>35) {
  echo "hot";
}else{
  echo "normal";
}

// Switch in php:

// check for string match:
$strength = "hope";
switch($strength){
  case("hope"):
    echo "yess";
    break;
  case("life"):
    echo "keep going";
    break;
  default:
    echo "try harder";
    break;
}

?>
