<?php
// Set your email address here
$to = "info@infinityads.co.za";

// Collect form data safely
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$subject = htmlspecialchars($_POST['subject']);
$message = htmlspecialchars($_POST['message']);

// Prepare email headers
$headers = "From: " . $email . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Compose the email body
$body = "You have received a new support message from Infinity's website:\n\n";
$body .= "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Subject: $subject\n";
$body .= "Message:\n$message\n";

// Attempt to send the email
if (mail($to, $subject, $body, $headers)) {
    echo "<h2>Thank you! Your message has been sent.</h2>";
    echo "<a href='index.html'>Return to homepage</a>";
} else {
    echo "<h2>Oops! Something went wrong. Please try again later.</h2>";
}
?>