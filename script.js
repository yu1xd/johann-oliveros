const greeting = document.getElementById('greeting');
if (greeting) {
  const hour = new Date().getHours();
  if (hour < 12) greeting.textContent = "Good Morning!";
  else if (hour < 18) greeting.textContent = "Good Afternoon!";
  else greeting.textContent = "Good Evening!";
}   

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

function validateForm() {
  const name = document.forms["contactForm"]["name"].value;
  const email = document.forms["contactForm"]["email"].value;
  const message = document.forms["contactForm"]["message"].value;
  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields before submitting.");
    return false;
  }
  alert("Form submitted successfully!");
  return true;
}
