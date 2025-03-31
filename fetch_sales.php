<?php
include 'config.php';

$sql = "SELECT * FROM salesrecords ORDER BY date DESC";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "<tr>";
        // Match the header order: Date, Item, Type, Quantity, Price, Total
        echo "<td>" . $row['date'] . "</td>";
        echo "<td>" . $row['item'] . "</td>";
        echo "<td>" . $row['type'] . "</td>";
        echo "<td>" . $row['quantity'] . "</td>";
        echo "<td>" . $row['price'] . "</td>";
        echo "<td>" . $row['total'] . "</td>";
        echo "</tr>";
    }
} else {
    echo "<tr><td colspan='6'>No records found</td></tr>";
}

$conn->close();
?>
