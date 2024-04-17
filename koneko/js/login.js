//FIELD EYEE FOR SEE THE PASSWORD

var passField = document.querySelector(".wrapper input");
var btnEye = document.querySelector("span i");

btnEye.onclick = function(){
    if(passField.type === "password"){
        passField.type = "text";
        btnEye.classList.add("hide-btn");
    }else{
        passField.type = "password";
        btnEye.classList.remove("hide-btn");
    }
}

function login(){
    var user, password

    //ALL INPUT DATA RECEIVED THIS VARIABLES

    user = document.getElementById("user").value;
    password = document.getElementById("password").value; 

    //NOW STORAGE THIS DATA IN YOUR WEB BROWSER STORE

    //localStorage.setItem('User', user);
    //localStorage.setItem('Password', password);

    document.getElementById("user").value="";
    document.getElementById("password").value="";

    //NOW WRITE SOME CONDITIONS

    var NewUser = "Koneko";
    var NewPassword = "Grupokoneko#";

    if(user==NewUser && password ==NewPassword){
        localStorage.setItem("code","secret");
        window.location = "home.html";
    }else{
        alert("Datos incorrectos")
    }

    //var user = localStorage.getItem("User");
    //var password = localStorage.getItem("Password");

    //if(user==User && password==Password){
    //    window.location.href = "home.html";
    //}
}