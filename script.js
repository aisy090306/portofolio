const nama = document.getElementById("name").value;
const email = document.getElementById("email").value;
const subject = document.getElementById("subject").value;
const message = document.getElementById("message").value;

function send() {
  alert(
    `Nama : ${nama.value}, Email : ${email.value}, Subject : ${subject.value}, Message : ${message.value}`
  );
}

(function () {
  emailjs.init("S9ezJdPsTERGQzrax");
})(); //inisialisasi api key emailjs

document
  .getElementById("submitEmail")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.send("service_5x6vap8", "template_xpfbyfc", {
      from_name: nama,
      from_email: email,
      from_subject: subject,
      from_message: message,
    })
    .then(function(response) {
        console.log("SUCCESS!!", response.status, response.text);
        
        Swal.fire({
        icon: "success"
        
        })
    })
  });
