document.addEventListener("DOMContentLoaded", () => {
    // Mark that the splash was shown in this session.
    sessionStorage.setItem("splashShown", "true");
    setTimeout(() => {
         window.location.href = "index.html";
    }, 2000); // Adjust delay as needed
});
