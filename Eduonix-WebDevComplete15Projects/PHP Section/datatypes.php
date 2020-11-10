<?php

//Declare and print a string with a line break html tag:
$name = 'Axel';
//concatenate and print:
echo 'Name: ' . $name . '<br/>';

//Using single quotes in a string:
$message = "Axel's finishing move."
echo $message . '<br/>';

//Concatenating without the .
//only use double quotes when using the variable's name directlyto contcatenate.
echo "Best Fighter is $name";
$age = 21;
// age is treated as a string automatically:
echo "Axel's age is $age";

//Integers:
$x  = 10;

// Get datatype and the value of a variable:
var_dump($x);

// Operations on integers:
$y = 11;
$z = $x + $y;
echo '<br/>';
echo $z;

//hexa decimal integers:
$hex = 0x1A;
//move cursor to new line:
echo '<br/>';
//prints value of the variable hex in decimal base (base 10):
var_dump($hex);

//Octa decimal integers:
$octa = 0123;
//move cursor to new line:
echo '<br/>';
//prints value of the variable octa in decimal base (base 10):
var_dump($octa);

// floats:
$f = 3.5;
echo '<br/>';
var_dump($f);

//--

// Test a condition:
$boo = (5<6);
// prints datatype and value of boo:
var_dump($boo);

// Testing AND, OR condition:
$boo2 = (6>7);
$boo3 = $boo && $boo2;
var_dump($boo3);
$boo3 = $boo || $boo2;
var_dump($boo3);

//Not condiiton:
var_dump(!$boo3);









?>
