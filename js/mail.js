const form = document.querySelector('form');


function sendEmail(){
  const clientName = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const msg = document.getElementById("message").value;
  const bodyMessage= `Name: ${clientName}<br> Email: ${email}<br> Message:${msg}`;

  Email.send({ 
    SecureToken : "6789a03a-b1dd-411f-a7c1-22bd2b748d7a ",
    To : "rabishsharmamips@gmail.com",
    From :"sharmag620098@gmail.com",
    Subject : subject,
    Body : bodyMessage   
    }).then(
      message =>{
        if(message=="OK"){
          Swal.fire({
          title: "Success!",
          text: "Message sent successfilly!",
          icon: "success"
        });
     }
     else{
      Swal.fire({
        title: "error!",
        text: "Something  is wrong !",
        icon: "error"
      });
     }
    }
    );
}
form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();

  form.reset();
});

