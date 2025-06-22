
// Welcome message in console
window.onload = function () {
  console.log("Welcome to Arnob Hossan Shanto's Website!");
};

// Toggle dark/light theme
function toggleTheme() {
  document.body.classList.toggle("dark");
  alert("🌗 Theme toggled!");
}

// Scroll to top functionality
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show current date and time in console
function showDateTime() {
  const now = new Date();
  console.log("Current date and time:", now.toLocaleString());
}

// Alert when form is submitted
function handleFormSubmit(event) {
  event.preventDefault();
  alert("✅ Message sent successfully!");
  return false;
}

// Optional: Add listener if contact form is found
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector("form");
  if (contactForm) {
    contactForm.addEventListener("submit", handleFormSubmit);
  }
});
