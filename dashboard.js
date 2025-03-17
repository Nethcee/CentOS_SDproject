window.onload = function () {
    function showSection(sectionId, element) {
      document.querySelectorAll(".content-section").forEach((section) => {
        section.style.display = "none";
      });
      document.getElementById(sectionId).style.display = "block";
  
      document.querySelectorAll(".nav-item").forEach((item) => {
        item.classList.remove("active");
      });
      element.classList.add("active");
    }
  
    // Attach event listeners to sidebar items
    document.querySelectorAll(".nav-item").forEach((item) => {
      item.addEventListener("click", function () {
        const sectionId = this.getAttribute("data-section");
        if (sectionId) showSection(sectionId, this);
      });
    });
  
    // Show dashboard by default
    document.getElementById("dashboard-section").style.display = "block";
  };
  