var tableUser = localStorage.getItem("tableUserLocalStorage");
tableUser = JSON.parse(tableUser);
if(tableUser == null){
    var tableUser = [];
}

var employees = localStorage.getItem("employees");
employees = JSON.parse(employees);

if(employees == null){
    var employees = 0;
}

reloadWebPage();

function save(){
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
    }else{
        console.log('GET SAVE');
    var objUser = JSON.stringify({
        idUser: (employees > 0)? employees : (tableUser.length + 1),
        date: document.getElementById("date").innerHTML,
        hour: document.getElementById("hour").innerHTML,
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        company: document.getElementById("company").value,
        profession: document.getElementById("profession").value
    });
    console.log(objUser);
    //EDIT USER
    if(employees > 0){
        for(const i in tableUser){
            var varUser = JSON.parse(tableUser[i]);
            if(varUser.idUser == employees){
                tableUser[i] = objUser;
                break;
            }
        }
    }else{
        //NEW USERS
        tableUser.push(objUser);
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
        localStorage.setItem("tableUserLocalStorage", JSON.stringify(tableUser));
        window.location.replace("thanks.html");
        }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
        });
    });

    }
}

function reloadWebPage(){
    if(employees > 0){
        //GER WEBFORM DATA ABOUT THE REGISTERED USERS
        for(const i in tableUser){
            var varUser = JSON.parse(tableUser[i]);
            if(varUser.idUser == employees){
                document.getElementById("idUser").value = varUser.idUser;
                document.getElementById("date").value = varUser.date;
                document.getElementById("hour").value = varUser.hour;
                document.getElementById("name").value = varUser.name;
                document.getElementById("phone").value = varUser.phone;
                document.getElementById("email").value = varUser.email;
                document.getElementById("company").value = varUser.company;
                document.getElementById("profession").value = varUser.profession;
            }
        }
    }
}