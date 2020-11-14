<?php

//Email validation:
$email = "nexuskarthik@gmail.com";
//first sanitize the email address:
$email_clean = filter_var($email, FILTER_SANITIZE_EMAIL);
//returns the email address if its valid i.ein right format, doesnt mean it exists.
echo filter_var($email_clean, FILTER_VALIDATE_EMAIL);
echo "<br/>";
if(filter_var($email_clean, FILTER_VALIDATE_EMAIL)){
    echo "valid";
}else {
    echo "invalid";
}

//URL validation:
$url = "https://www.google.com";
//first sanitize the email address:
$url_clean = filter_var($url, FILTER_SANITIZE_URL);
//returns the email address if its valid i.ein right format, doesnt mean it exists.
echo filter_var($url_clean, FILTER_VALIDATE_URL);
echo "<br/>";
if(filter_var($url_clean, FILTER_VALIDATE_URL)){
    echo "valid url";
}else {
    echo "invalid url";
}



?>
