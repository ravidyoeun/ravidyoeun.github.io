<?php

/*

- Thank you for purchasing the Wave - portfolio Template from hBeThemes.
- You can edit the code below to make the "notify me" button work. Simply add your MailChrimp API and ListID credentials below and the button will work. Open the "readme.pdf" file for more details on how to edit the code below.

*/








// If the "Subscribe" button was pressed then:
session_start();
if(isset($_POST['notify-email-submit'])){
    
    // Get the first name
    $fname = $_POST['notify-fname'];
    
    // Get the last name
    $lname = $_POST['notify-lname'];
    
    // Get the email
    $notifyemail = $_POST['notify-email'];
    
    // If values were filled in then:
    if(!empty($notifyemail) && !filter_var($notifyemail, FILTER_VALIDATE_EMAIL) === false){
        
        // MailChimp API credentials
        $apiKey = 'YourMailChimpAPI'; // Add your MailChimp API Key
        $listID = 'YourMailChimpListID'; // Add your MailChimp List ID
        
        // MailChimp API URL
        $memberID = md5(strtolower($notifyemail));
        $dataCenter = substr($apiKey,strpos($apiKey,'-')+1);
        $url = 'https://' . $dataCenter . '.api.mailchimp.com/3.0/lists/' . $listID . '/members/' . $memberID;
        
        // Member information
        $json = json_encode([
            'email_address' => $notifyemail,
            'status'        => 'subscribed',
            'merge_fields'  => [
                'FNAME'     => $fname,
                'LNAME'     => $lname
            ]
        ]);
        
        // Send a HTTP POST request with curl
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_USERPWD, 'user:' . $apiKey);
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
        $result = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        
        // Store the status message based on response code
        if ($httpCode == 200) {
            
            // Tell the user they have subscribed
            die("You have subscribed! <a href='/'>Click here to continue</a>.");
        } else {
            switch ($httpCode) {
                case 214:
                    
                    //Tell the user they have already subscribed
                    die("You have already subscribed, <a href='/'>click here to continue</a>.");
                    break;
                    
                default:
                    
                    // Tell the user an error occurred
                    die("An error has occured, <a href='/'>click here to try again</a>.");
                    break;
                    
            }
        }
    } else {
        
        // Tell the user to enter a valid email address
        die("Please enter valid email address, <a href='/'>click here to try again</a>.");
    }
}

// Take to homepage
header("location: /");
?>