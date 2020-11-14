<?php

//Send information to a web server using php:
//GET method:
// this php file is mentioned in the action acttribute of a form tag, in an html page.
echo "<h3>GET:</h3>"
//prints the information sent using the get method:
print_r($_GET);
if($_GET["submit"]){
  echo "<p>the get form has been submitted.</p>";
}
if($_GET["username"]){
  echo "<p>Hi, " . $_GET["username"] . ". Welcome to my page.</p>";
}

echo "<h3>POST:</h3>"
//prints the information sent using the post method:
print_r($_POST);
if($_POST["submit"]){
  echo "<p>the post form has been submitted.</p>";
}
if($_POST["country"]){
  echo "<p>Your country is " . $_POST["country"] . "</p>";
}



?>
