<?php

// An object is an instance of a class.
// A class is similar to a template and objects can be created using the template.

//creating a class in php:
class car{
  //properties and its default values of this class:
  $make = "ford";
  $price = 99;
  // a public property/variable can be accessed within the class and outside the class:
  public $condition = "new";
  // a private property/variable can be accessed only within the class and not outside the class:
  private $status = "off";

  //methods:
  //functions also linked to this class just like properies.
  function Turn_on(){
    // modifying private variable of the class, within the class:
    $this->status = "on";
  }
  function Get_status(){
    return $this->status;
  }
}

// an instance/object of the class is created:
// all varibales and methods of the car class has been assigned to this object.
$my_car = new car;
// get information of this object:
var_dump($my_car);

// access and print a public variable of car class through the my_car object:
echo "<br/>";
echo $my_car->condition;

//cannot access the private variable directly outside the classs, throws an error:
echo "<br/>";
echo $my_car->status;

//access a private variable through a method:
echo "<br/>";
echo $my_car->Get_status();

//access the private variable indirectly from outside the class, through a method of the class:
echo "<br/>";
$my_car->Turn_on();
// check if the private variable has be accessed and modified:
var_dump($my_car);





?>
