document.getElementById("timestamp").value = new Date().toISOString();

document.getElementById("membershipForm").addEventListener("submit", function () {
  document.getElementById("membershipForm").addEventListener("submit", function (e) {
  e.preventDefault();
  window.location.href = "thankyou.html";
});
});
