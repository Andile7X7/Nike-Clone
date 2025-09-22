console.log("Script is running");


const emailInput = document.getElementById('email');
const formGroup = emailInput.closest('.form-group');
const errorMessage = formGroup.querySelector('.error-message');

// Simple email pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validate on input or blur
emailInput.addEventListener('input', validateEmail);
emailInput.addEventListener('blur', validateEmail);

function validateEmail() {
  const value = emailInput.value.trim();

  if (value === '' || !emailPattern.test(value)) {
    formGroup.classList.add('error');
    errorMessage.textContent = 'Required';
    errorMessage.style.display = 'block';
    EmailValid = false
  } else {
    formGroup.classList.remove('error');
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';
    emailInput.style.border = "1px solid green";
    EmailValid = true;
  }
}

let Inputname = document.getElementById("Name");
const nameInput = document.getElementById('Name');
const nameGroup = nameInput.closest('.name-group');
const errorMessage1 = nameGroup.querySelector('.error-message1');

// Allow only letters, spaces, and hyphens — minimum 3 characters
const validNamePattern = /^[a-zA-Z\s\-]{3,}$/;

nameInput.addEventListener('input', () => {
  const value = nameInput.value.trim();

  if (validNamePattern.test(value)) {
    nameGroup.classList.remove('error1');
    errorMessage1.textContent = '';
    errorMessage1.style.display = 'none';
    nameInput.style.border = "1px solid green"
    NameValid = true;
  } else {
    nameGroup.classList.add('error1');
    errorMessage1.textContent = 'Required';
    errorMessage1.style.display = 'block';
    NameValid = false;
  }
});

const passwordInput = document.getElementById('password');
const passwordGroup = passwordInput.closest('.password-group');
const errorMessage2 = passwordGroup.querySelector('.error-message2');

passwordInput.addEventListener('input', () => {
  const value = passwordInput.value.trim();

  if (value.length >= 8) {
    passwordGroup.classList.remove('error');
    errorMessage2.textContent = '';
    errorMessage2.style.display = 'none';
    passwordInput.style.border = "1px solid green"
    PasswordValid = true;
  } else {
    passwordGroup.classList.add('error');
    errorMessage2.textContent = 'required';
    errorMessage2.style.display = 'block';
    PasswordValid = false;
  }
});

const toggleBtn = document.getElementById('togglePassword');

toggleBtn.addEventListener('click', () => {
  const isHidden = passwordInput.type === 'password';
  passwordInput.type = isHidden ? 'text' : 'password';
  toggleBtn.textContent = isHidden ? 'Hide Password' : 'View Password';
});


document.getElementById('LoginForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default form submission

  emailjs.sendForm('service_50bkhi4', 'template_nnftgtw', this)
    .then(() => {
      alert("Login email sent successfully!");
      let Username = nameInput.value;
      localStorage.setItem("Username", Username)
      window.location.href = "index.html"
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      alert("Something went wrong. Please try again.");
    });
});

document.querySelector(".Shoes").addEventListener("click", function(){
    window.location.href = "Shoes.html"
})

document.querySelector(".Jordan").addEventListener("click", function(){
    window.location.href = "Jordan.html"
})
document.querySelector(".Equipment").addEventListener("click", function(){
    window.location.href = "Equipment.html"
})
document.getElementById("FootballOption").addEventListener("click", function(){
    window.location.href = "Football.html"
})
document.getElementById("RunningShoes").addEventListener("click", function(){
    window.location.href = "Running.html"
})
document.getElementById("GymShoes").addEventListener("click", function(){
    window.location.href = "Gym.html"
})
document.getElementById("BasketballShoes").addEventListener("click", function(){
    window.location.href = "Basketball.html"
})
