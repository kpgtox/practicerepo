<?php

//Declaring Variables and concatenating strings:
$name = "karthik";
$age = 31;
$message = "hi, my name is " . $name . " and i am " . $age . " years old.";
//print:
echo $message;

//--

// Declaring constant variables:
define("COUNTRY", "INDIA");
define("PRICE", 999);
//print:
echo "Flight Destination: " . COUNTRY;
echo "Price: " . PRICE;

//--

//Empty or NULL Variables
//Declaring but not initialising a variable will result in a NULL variable:
$voo;
var_dump($voo);

//emptying a variable:
$foo = 9;
$foo = null;
var_dump($foo);

//--

//data type : Resource
//a resource variable holds reference to an external resource:
// the var manual contains a pointer to the file manual.txt which is stored in the same folder as this script:
// the parameter r means the file will be accessed only for reading.
$manual = fopen("manual.txt","r");
var_dump($manual);

//method to read a file from a resource that contains the pointer to a readable file:
echo "<br/>";
// read only 20 bytes of the file:
echo fread($manual,20);
//read the entire file:
echo fread($manual, filesize("manual.txt"));

//--



?>
