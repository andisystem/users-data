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

    Swal.fire({
        title: 'GUARDAR',
        html: '¿Deseas guardar los cambios?',
        showDenyButton: true,
        confirmButtonText: 'SI',
        denyButtonText: 'NO'
    }).then(
        (result) => {
            if(result.isConfirmed){
                console.log('GET SAVE');
                var objUser = JSON.stringify({
                    idUser: (employees > 0)? employees : (tableUser.length + 1),
                    date: document.getElementById("date").innerHTML,
                    hour: document.getElementById("hour").innerHTML,
                    company: document.getElementById("company").value,
                    nit: document.getElementById("nit").value,
                    name: document.getElementById("name").value,
                    profession: document.getElementById("profession").value,
                    phone: document.getElementById("phone").value,
                    email: document.getElementById("email").value,
                    country: document.getElementById("country").value,
                    city: document.getElementById("city").value
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

                localStorage.setItem("tableUserLocalStorage", JSON.stringify(tableUser));
                swal.fire('Los cambios han sido guardados','','success').then(
                    (result)=>{
                        window.location.replace("home.html");
                    }
                );
            }else{
                swal.fire('Los cambios no han sido guardados','','info');
            }
        }
    );
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
                document.getElementById("company").value = varUser.company;
                document.getElementById("nit").value = varUser.nit;
                document.getElementById("name").value = varUser.name;
                document.getElementById("profession").value = varUser.profession;
                document.getElementById("phone").value = varUser.phone;
                document.getElementById("email").value = varUser.email;
                document.getElementById("country").value = varUser.country;
                document.getElementById("city").value = varUser.city;
            }
        }
    }
}