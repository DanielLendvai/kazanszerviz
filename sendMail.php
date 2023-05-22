<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve data sent from Angular
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set email headers
    $recipient = 'lendvai.daniel92@gmail.com'; // Update with your recipient email address
    $subject = 'Contact Form Submission';
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Email content
    $emailContent = "You have received a new message from the contact form:\n\n";
    $emailContent .= "Email: $email\n";
    $emailContent .= "Message:\n$message";

    // Send email
    if (mail($recipient, $subject, $emailContent, $headers)) {
        echo json_encode(array("status" => "success", "message" => "Email sent successfully"));
    } else {
        echo json_encode(array("status" => "error", "message" => "Failed to send email"));
    }
} else {
    echo json_encode(array("status" => "error", "message" => "Invalid request method"));
}
?>
