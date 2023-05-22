<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve data sent from Angular
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $location = $_POST['location'];
    $telephone = $_POST['telephone'];
    $checkboxes = isset($_POST['checkboxes']) ? $_POST['checkboxes'] : [];

    // Set email headers
    $recipient = 'lendvai.daniel92@gmail.com'; // Update with your recipient email address
    $subject = 'Weboldalon keresztüli megkeresés';
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Email content
    $emailContent = "$name az alábbi üzenetet küldte a kapcsolati ürlapon keresztül:\n\n";
    $emailContent .= "Üzenete: $message\n\n";
    $emailContent .= "Email címe: $email\n";
    $emailContent .= "Település, kerület: $location\n";
    $emailContent .= "Telefon száma: $telephone\n";
    $emailContent .= "Választott szolgáltatások: " . implode(", ", $checkboxes) . "\n";

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
