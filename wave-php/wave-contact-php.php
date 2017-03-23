<?php


/*
--- Send message button ---
*/


$myemail = "ravid.yoeun@gmail.com"; 



// Get the details from the form:
$name = @$_POST['name'];
$email = @$_POST['email'];
$subject = @$_POST['subject'];
$message = @$_POST['message'];
$contactus = @$_POST['contactus'];

// If the button is pressed then:
if (isset($contactus)) {
    
    // Make sure all of the fields are filled in:
    if ($name && $email && $subject && $message) {    
        
        //Send the email:
        mail($myemail, $subject, $message, "From:".$email);
        
        // Tell the user the email has sent
        die("Thank you for contacting us, <a href='/'>click here to continue</a>.");
        
    } else {
        
        // Tell the user to fill out the contact form
        die("Please enter your name, email, subject and message. <a href='/'>Click here to try again</a>.");
        
    }
    
}

?>