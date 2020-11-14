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

//Adding two associative arrays (merging):
//combines elements of both the arrays:
$twowheelers = $bikes + $mopeds;
echo "<p>bikes + mopeds :</p>";
var_dump($twowheelers);
print_r($twowheelers);

//--

//Merging two index arrays:
$b1 = array("apples","kiwi");
$b2 = array("bananas","dates");
$b3 = array_merge($b1,$b2);
print_r($b3);

//--

// get and print no. of elements in an array (length of the array):
echo count($b3);

//--

// get number of occurances of every element in an array:
//the method below returns an array, with keys as elements and values as number of its occurances in the array.
$foo = array("milk","milk","cheese","cheese","cheese","bread","eggs");
$foo_occ = array_count_values($foo);
print_r($foo_occ);
echo "milk occures " . $foo_occ["milk"] . " times."
//--

// Check if an element exists in an array:
if(in_array("milk",$foo)){
  echo "present";
}
else {
  echo "nope";
}
//--

//append an element to an array:
$goo = array("one","two");
array_push($goo, "three");
print_r($goo);
//--

// push item into cart after clicking submit:
$cart;
// check if submit button (with its name attribute as submit) is pressed:
if($_GET["submit"]){
  //check if user has selected an item from an input field (with its name attribute as item):
  if($_GET["item"]){
    //push that item to the cart array:
    array_push($cart,$_GET["item"]);
  }
}
print_r($cart);
//--















?>
