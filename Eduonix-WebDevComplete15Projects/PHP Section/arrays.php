<?php

//Array is a data structure storing variables in a linear fashion:

//Index array:
$cars = array("bmw","audi","merc");
echo '<p>Car makes:</p>';
// cannot use echo to print an array, instead use print_r or var_drump:
print_r($cars);

//printing elementsof an array:
echo '<p>First Element:</p>'
echo $cars[0];

//--

/*Assciative Array:
Arrays that have key value pairs:*/
$bikes = array("road"=>"yamaha",
                "mud"=>"bmw",
                "water"=>"ducati");
//print the associative array:
print_r($bikes);
//get information:
var_dump($bikes);

//--

//Two arrays are considered same if they have same elements even if the order is different:

//bool operation, double equals ==, on arrays with same elements but stored in different order:
$bikes = array("road"=>"yamaha",
                "mud"=>"bmw",
                "water"=>"ducati");
$mopeds = array("mud"=>"bmw",
                "water"=>"ducati"
                "road"=>"yamaha");
//should return true:
echo "<p>bikes==mopeds:</p>";
var_dump($bikes == $mopeds);

//bool operation, triple equals ===, on arrays with same elements but stored in different order:
//should return false, because order, elements and keys must match exactly:
echo "<p>bikes==mopeds:</p>";
var_dump($bikes === $mopeds);

//Not equals operator in php: !=, <>
echo "<p>bikes<>mopeds:</p>";
var_dump($bikes <> $mopeds);

//--

//Adding two associative arrays:
//combines elements of both the arrays:
$twowheelers = $bikes + $mopeds;
echo "<p>bikes + mopeds :</p>";
var_dump($twowheelers);
print_r($twowheelers);

//--









?>
