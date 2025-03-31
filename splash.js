document.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.getItem("splashShown") === "true") {
        window.location.href = "login.php";
        return;
    }

    sessionStorage.setItem("splashShown", "true");

    setTimeout(() => {
        const divider = document.querySelector(".divider");
        divider.style.animation = "stretchDivider 1s ease-out forwards";

        setTimeout(() => {
            document.querySelector(".logo-left").style.animation = "exitLeft 1s ease-out forwards";
            document.querySelector(".logo-right").style.animation = "exitRight 1s ease-out forwards";
        }, 1000);
    }, 1000);

    setTimeout(() => {
        window.location.href = "login.php";
    }, 4000);
});
