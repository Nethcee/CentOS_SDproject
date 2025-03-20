document.addEventListener("DOMContentLoaded", () => {
    // Mark that the splash was shown in this session.
    sessionStorage.setItem("splashShown", "true");

    setTimeout(() => {
        // Step 1: Animate the divider
        const divider = document.querySelector(".divider");
        divider.style.animation = "stretchDivider 1s ease-out forwards";

        setTimeout(() => {
            // Step 2: After divider finishes, animate the logos
            document.querySelector(".logo-left").style.animation = "exitLeft 1s ease-out forwards";
            document.querySelector(".logo-right").style.animation = "exitRight 1s ease-out forwards";
        }, 1000); // Waits for divider animation to finish (1s)

    }, 1000); // Extra 1-second delay before animations start (total splash 4s)

    // Redirect after animations finish + 1 extra second for visibility
    setTimeout(() => {
        window.location.href = "log-in.html";
    }, 4000); // Now 4s instead of 3s
});
