const PASSWORD = "NMS123"; // change this

function checkPassword() {
  const input = document.getElementById("pw").value;

  if (input === PASSWORD) {
    sessionStorage.setItem("authenticated", "true");
    window.location.href = "index.html"; // or your main page
  } else {
    document.getElementById("error").textContent = "Incorrect password";
  }
}

function requireAuth() {
  if (sessionStorage.getItem("authenticated") !== "true") {
    window.location.href = "login.html";
  }
}
