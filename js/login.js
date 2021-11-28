var username = document.getElementById("formGroupExampleInput");
var pwd = document.getElementById("formGroupExampleInput2");
var btn = document.getElementById("btn");


function valid_username(){
    if(username.value == "admin"){
        username.style.border= "3px solid green";
        p1.innerHTML = "Valid!";
        p1.style.color = "green";
    }
    else{
        username.style.border= "3px solid red";
        p1.innerHTML = "Invalid!";
        p1.style.color = "red";  
    }
}


function valid_pwd(){
    if(pwd.value == "12345"){
        pwd.style.border= "3px solid green";
        p2.innerHTML = "Valid!";
        p2.style.color = "green";
    }
    else{
        pwd.style.border= "3px solid red";
        p2.innerHTML = "Invalid!";
        p2.style.color = "red";  
    }
}


btn.addEventListener("click", function(){
    if(username.value == "admin" && pwd.value == "12345"){
        window.location.href = "home.html";
    }
    else if((username.value == "" && pwd.value == "")){
        alert("Please enter username & password :)");
    }
    else if((username.value == "admin" && pwd.value == "")){
        alert("Please enter password :)");
    }else if((username.value == "" && pwd.value == "12345")){
        alert("Please enter username :)");
    }
    else{
        alert(" Entered Wrong Credientials :) sorry!! Try Again..");
    }
})