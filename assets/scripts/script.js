// Replace these emailjs details

var emailjs_public_api = "";
var emailjs_template_api = "";
var emailjs_template_api = "";


emailjs.init("user_public_api");

function sendEmail() {
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    discord: document.getElementById("discord").value,
    order: document.getElementById("order").value,
    message: document.getElementById("message").value,
  };

  // Send the email using Email.js
  emailjs.send("emailjs_service_api", "emailjs_template_api", formData)
    .then(function(response) {
      console.log("Email sent successfully:", response);
      document.getElementById("status").innerHTML = "Message Sent";
      document.getElementById("status").style.color = "green";
    }, function(error) {
      console.log("Error sending email:", error);
      document.getElementById("status").innerHTML = "Oops! Something went wrong. Please try again later.";
      document.getElementById("status").style.color = "red";
    });
}



