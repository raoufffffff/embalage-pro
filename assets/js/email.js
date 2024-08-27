function sendMail() {
         let parms = {
                  name : document.getElementById("name").value,
                  email : document.getElementById("email").value,
                  text : document.getElementById("text").value,
                  message : document.getElementById("message").value,
         }
         emailjs.send("service_1cth4sl","template_ynb1vco",parms).then(alert("Email Send !!"));
}