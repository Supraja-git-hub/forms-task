if (user) {
    alert("Login successful!");
    document.getElementById("dashboard").style.display = "block";
    document.getElementById("welcomeText").textContent = `Welcome, ${user.name}`;
  } else {
    alert("Invalid credentials!");
  }

