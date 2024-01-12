<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Create email content
    $emailContent = "Name: $name\n";
    $emailContent .= "Email: $email\n";
    $emailContent .= "Message:\n$message";

    // Set recipient email address
    $to = "mwangilawrence@example.com";

    // Set email subject
    $subject = "New Form Submission";

    // Set additional headers
    $headers = "From: $email" . "\r\n";

    // Send email
    if (mail($to, $subject, $emailContent, $headers)) {
        echo "Thank you! Your message has been sent.";
    } else {
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
} else {
    // Redirect to the form page if accessed directly
    header("Location: contact-form.html");
    exit();
}
?>
