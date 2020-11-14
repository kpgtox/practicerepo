<?php

//filtering variables containing sensitive information to avoid hacks:
//javascript code can be injected by hackers into username variables in yoru scripts.
//so use filter_var method to convert everything in the username variable to a string so the code does not get executed.
$username = '<script>window.alert("this site is now hacked.")</script>';
$username_filtered = filter_var($username, FILTER_SANITIZE_STRING);
//if the username variable is hacked, using echo on it will run the hacker code:
//echo $username;
//username variable converted to a string:
echo $username_filtered;

//filter an email, remove slashes and spaces:
$user_email = "nex us karth// ik@\\gmail. com ";
$email_filtered = filter_var($user_email, FILTER_SANITIZE_EMAIL);
echo "<br/>";
echo $email_filtered;

?>
