
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
