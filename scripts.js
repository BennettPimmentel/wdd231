// === WEATHER (Simulated Example) ===
document.getElementById("currentWeather").textContent =
  "75°F – Partly Cloudy | High: 85°F | Low: 52°F | Humidity: 34%";

// === DARK MODE TOGGLE ===
const toggleBtn = document.createElement("button");
toggleBtn.classList.add("dark-toggle");
toggleBtn.innerHTML = "🌙";
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// === LAST MODIFIED DATE ===
document.getElementById("lastModified").textContent =
  "Last Modification: " + document.lastModified;
