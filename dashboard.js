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

  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", function () {
      const sectionId = this.getAttribute("data-section");
      if (sectionId) showSection(sectionId, this);
    });
  });

  document.getElementById("dashboard-section").style.display = "block";

  // ✅ SALES TABLE FUNCTIONALITY (Add & Delete Rows)
  const tableBody = document.querySelector("#sales-table tbody");
  const addRowBtn = document.getElementById("add-row-btn");

  function addRow() {
    if (!tableBody) {
      console.error("Error: Table body not found.");
      return;
    }

    const row = document.createElement("tr");
    row.innerHTML = `
      <td><input type="text" placeholder="Product"></td>
      <td><input type="text" placeholder="Type"></td>
      <td><input type="number" placeholder="Price"></td>
      <td><input type="date"></td>
      <td><button class="delete-btn">Delete</button></td>
    `;

    row.querySelector(".delete-btn").addEventListener("click", function () {
      row.remove();
    });

    tableBody.appendChild(row);
  }

  if (addRowBtn) {
    addRowBtn.addEventListener("click", addRow);
  } else {
    console.error("Error: Add Row button not found.");
  }

  // ✅ LOGOUT FUNCTIONALITY
  const logoutBtn = document.querySelector(".logout");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      if (confirm("Are you sure you want to log out?")) {
        window.location.href = "login.html";
      }
    });
  }
};
