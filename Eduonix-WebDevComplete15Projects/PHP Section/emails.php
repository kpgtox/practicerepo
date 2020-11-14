<?php

// you will need a premium account from infinityfree web server to send emails from php scripts.

//the mail method can be used to send an email:
// upload the script on your web server in the appropriate directory and run it by url,
//example http://kpgtox-practice.infinityfreeapp.com/emails.php
$receiver = "nexuskarthik@gmail.com";
$subject = "sent from php";
$message = "yo this is a test message";
// prints 1 if mail has been sent by php successfully to the $receiver.
echo mail($receiver, $subject, $message);

//x--

//send an email with html format, along with applied css;
$receiver = "nexuskarthik@gmail.com";
$subject = "sent from php";
$message = "<html>
              <body>
                <h1 style='color:green'>
                  Hello there.
                </h1>
                <h3 style='color:orange'>
                  This is an html styledemail from php.
                </h3>
              </body>
            </html>";
// this parameter is important when sending a styled html email:
$headers = "Content-type : text/html;";
echo mail($receiver, $subject, $message, $headers);

//x--


?>
