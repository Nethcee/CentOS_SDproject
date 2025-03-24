<?php
session_start(); // Start the session

// Sample users stored in an array (Replace this with a database connection)
$users = [
    "admin" => "1234",
    "user1" => "password1"
];

// Get user input
$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

// Check if username exists and password matches
if (isset($users[$username]) && $users[$username] === $password) {
    $_SESSION['loggedin'] = true;
    $_SESSION['username'] = $username;
    header("Location: dashboard.html"); // Or dashboard.php if you have session checks
    exit();
} else {
    header("Location: login.php?error=1"); // Redirect back to login with an error message
    exit();
}
?>
