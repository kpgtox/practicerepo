<?php

//for loop:

// simple for loop:
for($i=0; $i<5; $i++){
  // print 0 to 5 in html:
  //echo $i . "<br/>";
  // print in ever new line, without html:ß
  echo $i . "\n";
}

//foreach loop;
$cars = array("bmw","audi","tata");
// for every element in the cars variable as the variable x.
foreach ($cars as $x) {
  echo $x."\n";
}

// foreach loop for an array with key value pairs:
$bikes = array("moped"=>"yamaha",
                "snow"=>"suzuki",
                "mud"=>"ducati");
// for every key value set in the bikes variable, variable x holds key information, variable y holds value information.
foreach ($bikes as $x => $y) {
  echo $x . " : " . $y . "\n";
}

//while loop:
// print 1 to 10:ß
$i = 1;
while($i<=10){
  echo $i . "\n";
  $i++;
}

//looping an array:
$cars = array("bmw","audi","tata");
$i = 0;
while($i<3){
  echo $cars[$i] . "\n";
  $i++;
}



?>
