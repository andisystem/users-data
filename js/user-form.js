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
        title: 'SAVE',
        html: 'Do you wish saving the changes?',
        showDenyButton: true,
        confirmButtonText: 'YES',
        denyButtonText: 'NO'
    }).then(
        (result) => {
            if(result.isConfirmed){
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

                localStorage.setItem("tableUserLocalStorage", JSON.stringify(tableUser));
                swal.fire('This changes have been saved','','success').then(
                    (result)=>{
                        window.location.replace("home.html");
                    }
                );
            }else{
                swal.fire('This changes have not been saved','','info');
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
                document.getElementById("name").value = varUser.name;
                document.getElementById("phone").value = varUser.phone;
                document.getElementById("email").value = varUser.email;
                document.getElementById("company").value = varUser.company;
                document.getElementById("profession").value = varUser.profession;
            }
        }
    }
}