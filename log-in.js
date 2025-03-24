/* 
function forgotPassword() {
  const username = document.getElementById('username').value;
  if (username) {
    alert(`Password reset link has been sent to the email associated with ${username}.`);
  } else {
    alert('Please enter your username to reset your password.');
  }
}

function login() {
  alert('LOG-IN COMPLETE');
}

    // Login Form Submission
    document.getElementById("loginForm").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      let username = document.getElementById("username").value;
      let password = document.getElementById("password").value;

      // Sample authentication (Replace with real backend logic)
      if (username === "admin" && password === "1234") {
          localStorage.setItem("loggedIn", "true"); // Save session
          window.location.href = "dashboard.html"; // Redirect to dashboard
      } else {
          alert("Invalid login credentials. Try again.");
      }
  });
*/