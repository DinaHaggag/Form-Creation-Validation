// Setup and Initial Code Structure
document.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById("registration-form");
  const feedbackDiv =document.getElementById("form-feedback");

  // Form Submission and Event Prevention
  form.addEventListener("submit",function(event){
    event.preventDefault();

    // Input Retrieval and Trimming
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validation Logic

    // Initialize Validation Variables
    let isValid = true;
    let messages = [];

    // Username Validation
    if(username.length<3){
      isValid = false;
      messages.push('Username must be at least 3 characters long.');
    }

    // Email Validation
    if(!email.includes("@") || !email.includes(".")){
      isValid = false;
      messages.push('Please enter a valid email address.');
    }

    // Password Validation
    if(password.length<8){
      isValid = false;
      messages.push('Password must be at least 6 characters long.');
    }

    // Displaying Feedback (Feedback Display Logic)
    const feedbackDiv = document.getElementById("form-feedback");
    feedbackDiv.style.display = "block";

    if(isValid === true){
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    }else{
      feedbackDiv.innerHTML = messages.join(" <br> ");
      feedbackDiv.style.color = "#dc3545";
    }
  })

});
