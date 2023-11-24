emailjs.init("SUj4syiP82sF_eVOJ");

function sendEmail() {
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    discord: document.getElementById("discord").value,
    order: document.getElementById("order").value,
    message: document.getElementById("message").value,
  };

  // Send the email using Email.js
  emailjs.send("service_sd8n2rj", "template_phb9r19", formData)
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



