
/*function validatePassword() {
    var p = document.getElementById('password').value,
        errors = [];
    if (p.length < 8) {
        errors.push("Your password must be at least 8 characters");
    }
    if (p.search(/[a-z]/i) < 0) {
        errors.push("Your password must contain at least one letter."); 
    }
    if (p.search(/[0-9]/) < 0) {
        errors.push("Your password must contain at least one digit.");
    }
    if (errors.length > 0) {
        alert(errors.join("\n"));
        return false;
    }
    return true;
}

form.addEventListener('login',(event)=>{
    verifyPassword();
}); */


function resetPass(){
    window.location = "resetPass.html"
}

function successfullyReg(){
    window.location = "registeredPage.html"
}

function contactMe(){
    window.location = "contact.html"
}


signUp();

function signUp() {
    // Create a new instance of the user class
    var user = new Parse.User();
    user.set("username", "my name");
    user.set("password", "my pass");
    user.set("email", "email@example.com");
  
    // other fields can be set just like with Parse.Object  
    user.signUp().then(function(user) {
        console.log('User created successful with name: ' + user.get("username") + ' and email: ' + user.get("email"));
    }).catch(function(error){
        console.log("Error: " + error.code + " " + error.message);
    });
}

logIn();

function logIn() {
    // Create a new instance of the user class
    var user = Parse.User
        .logIn("myname", "mypass").then(function(user) {
            console.log('User created successful with name: ' + user.get("username") + ' and email: ' + user.get("email"));
    }).catch(function(error){
        console.log("Error: " + error.code + " " + error.message);
    });
}

const rmCheck = document.getElementById("rememberMe"),
    emailInput = document.getElementById("number");

if (localStorage.checkbox && localStorage.checkbox !== "") {
  rmCheck.setAttribute("checked", "checked");
  emailInput.value = localStorage.username;
} else {
  rmCheck.removeAttribute("checked");
  emailInput.value = "";
}

function lsRememberMe() {
  if (rmCheck.checked && emailInput.value !== "") {
    localStorage.username = emailInput.value;
    localStorage.checkbox = rmCheck.value;
  } else {
    localStorage.username = "";
    localStorage.checkbox = "";
  }
}

function verifyPassword() {  
    var pw = document.getElementById("password").value;  

    //check empty password field  
    if(pw == "") {  
       document.getElementById("message").innerHTML = "**Fill the password please!";  
       return false;  
    }  
     
   //minimum password length validation  
    if(pw.length != 8 ) {  
       document.getElementById("message").innerHTML = "**Password length must be 8 characters";  
       return false;  
    }  


    if (pw.search(/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/) < 0) {
        document.getElementById("message").innerHTML = "**Password must contain at least one symbol";  
       return false;  
    }

    if (pw.search(/[0-9]/) < 0) {
        document.getElementById("message").innerHTML = "**Password length must contain at least one digit";  
       return false;  
    }

    if (pw.search(/[a-z]/i) < 1 || pw.search(/[A-Z]/)<1) {
        document.getElementById("message").innerHTML = "**Password must contain at least 1 lowercase and 1 capital letter";  
        return false;  
    }
  else {  
    window.location.href("newPage.html");

       //alert("Password is correct");  
    }  
  }  