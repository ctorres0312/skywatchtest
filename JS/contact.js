// Get all needed elements from the DOM
const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#user-name");
const emailInput = document.querySelector("#user-email");
const messageInput = document.querySelector("#message");

//Get data from email JS
const publicKey = "3F6KqLkz22hjGpXfV";
const serviceId = "service_29p3z5t";
const templateId = "template_z0x4imc";

//initialize email JS with public key
emailjs.init(publicKey);


// Add submit event to the form
contactForm.addEventListener("submit", e => {
    e.preventDefault();
})
//Change button text
submitBtn.innerText = "Processing...";
//Get all input field values
const inputFields = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
}
// Send the email
// (Add service, template ID and input field values)
emailjs.send(serviceId, templateId, inputFields)
    .then(() => {
        //change button text
        submitBtn.innerText = "Message Sent Successfully";
        //Clear out all input fields
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    }, (error) => {
        console.log(error);
        //Change button text
        submitBtn.innerText = "Something went wrong";
    });
