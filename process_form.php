<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $phone = $_POST["phone"];

    $to = "goitomgta444@gmail.com";
    $subject = "New Order";
    $message = "Name: $name\nPhone: $phone";

    $headers = "From: webmaster@example.com"; // Update with your email or leave it blank

    $success = mail($to, $subject, $message, $headers);

    if ($success) {
        echo "Email sent successfully";
    } else {
        echo "Failed to send email";
    }
} else {
    echo "Invalid request method";
}
?>