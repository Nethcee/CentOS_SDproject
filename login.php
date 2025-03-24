<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="login.css" />
  <link rel="icon" type="image/x-icon" href="assets/favicon.png">
  <title>Login Page</title>
</head>
<body <?php if (isset($_GET['error'])) { echo 'class="no-animation"'; } ?>>

  <h1 class="header-title">Welcome to Financial Management System</h1>

  <div class="container" id="loginContainer">
    <p>Log in to continue</p>
    <!-- Login form submitting to authenticate.php -->
    <form id="loginForm" method="POST" action="authenticate.php">
      <input type="text" class="username-input" id="username" name="username" placeholder="Username" required />
      <input type="password" class="password-input" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    
    <!-- Error message display -->
    <?php if (isset($_GET['error'])): ?>
      <p style="color: red;">Invalid login credentials. Please try again.</p>
    <?php endif; ?>

    <p><a href="#" onclick="forgotPassword()">Forgot Password?</a></p>
    <p>Don't have an account? <a href="#" onclick="signUp()">Sign Up</a></p>
  </div>

  <div class="container hidden" id="signupContainer">
    <h2>Create your account</h2>
    <input type="text" id="newUsername" placeholder="Enter a username" />
    <input type="password" id="newPassword" placeholder="Enter a password" />
    <input type="email" id="email" placeholder="Enter your email" />
    <button onclick="createAccount()">Sign Up</button>
    <p>Already have an account? <a href="#" onclick="showLogin()">Login here</a></p>
  </div>

  <script>
    function forgotPassword() {
      const username = document.getElementById('username')?.value;
      if (username) {
        alert(`Password reset link has been sent to the email associated with ${username}.`);
      } else {
        alert('Please enter your username to reset your password.');
      }
    }

    function signUp() {
      document.getElementById('loginContainer').classList.add('hidden');
      document.getElementById('signupContainer').classList.remove('hidden');
    }

    function showLogin() {
      document.getElementById('signupContainer').classList.add('hidden');
      document.getElementById('loginContainer').classList.remove('hidden');
    }

    function createAccount() {
      const username = document.getElementById('newUsername').value;
      const password = document.getElementById('newPassword').value;
      const email = document.getElementById('email').value;
      if (username && password && email) {
        alert(`Account created successfully for ${username}!`);
        showLogin();
      } else {
        alert('Sign-up failed. Please provide valid credentials.');
      }
    }
  </script>

</body>
</html>
