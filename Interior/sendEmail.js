//OPEN WEBFORM MODAL

const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
modal_container.classList.remove('show');
});

//SEND WEBFORM

function save() {
    var name=document.getElementById('name').value;
    var phone=document.getElementById('phone').value;
    var email=document.getElementById('email').value;
    var company=document.getElementById('company').value;
    var profession=document.getElementById('profession').value;

    if(name==""){
        Swal.fire({
                text: 'El nombre es obligatorio digitarlo',
                icon: 'warning',
                confirmButtonText: 'Aceptar',
                backdrop: true,
                timer: 3000,
                toast: 'true',
                position: 'center',
            });
    document.elementById("name").focus();
    }
    if(phone==""){
        Swal.fire({
                text: 'El número del celular es obligatorio digitarlo',
                icon: 'warning',
                confirmButtonText: 'Aceptar',
                backdrop: true,
                timer: 3000,
                toast: 'true',
                position: 'center',
            });
    document.elementById("phone").focus();
    }
    if(email==""){
        Swal.fire({
                text: 'El correo electrónico es obligatorio digitarlo',
                icon: 'warning',
                confirmButtonText: 'Aceptar',
                backdrop: true,
                timer: 3000,
                toast: 'true',
                position: 'center',
            });
    document.elementById("email").focus();
    }
    if(company==""){
        Swal.fire({
                text: 'El nombre de la empresa es obligatorio digitarlo',
                icon: 'warning',
                confirmButtonText: 'Aceptar',
                backdrop: true,
                timer: 3000,
                toast: 'true',
                position: 'center',
            });
    document.elementById("company").focus();
    }
    if(profession==""){
        Swal.fire({
                text: 'El cargo es obligatorio digitarlo',
                icon: 'warning',
                confirmButtonText: 'Aceptar',
                backdrop: true,
                timer: 3000,
                toast: 'true',
                position: 'center',
            });
    document.elementById("profession").focus();
    }
}

function sendEmail() {
    var webform = document.getElementById('formUsers');
    console.log(webform.submit());
}

//SUBMIT USERFORM SMTP

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "artworldartistico@gmail.com",
        Password : "*Mund04rt32021#",
        To : 'artworldartistico@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New email test message",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Mobile number: " + document.getElementById("phone").value
            + "<br> Corporative email: " + document.getElementById("email").value
            + "<br> Company name: " + document.getElementById("company").value
            + "<br> Post: " + document.getElementById("profession").value
            + "<br> These data have been sent from: " + document.getElementById("date").innerHTML + "at " + document.getElementById("hour").innerHTML 
    }).then(
    message => alert("message sent successfully")
    );
}

//SEND WEBFORM TO EMAILJS

const btn = document.getElementById('submit');

document.getElementById('formUsers')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_0km5fgk';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});