<?php
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $item = $_POST['sales-item'];
    $type = $_POST['sales-type'];
    $quantity = $_POST['sales-quantity'];
    $price = $_POST['sales-price'];
    $total = $quantity * $price;

    $stmt = $conn->prepare("INSERT INTO sales (item, type, quantity, price, total) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("ssidd", $item, $type, $quantity, $price, $total);

    if ($stmt->execute()) {
        echo "Sale recorded successfully.";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
