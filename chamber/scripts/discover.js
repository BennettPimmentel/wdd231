const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();
const visitMessage = document.getElementById("visitMessage");

if (!lastVisit) {
  visitMessage.textContent = "Welcome! This is your first visit.";
} else {
  const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  visitMessage.textContent =
    days === 0
      ? "Welcome back! You visited today."
      : `Welcome back! Last visit: ${days} day(s) ago.`;
}

localStorage.setItem("lastVisit", now);
