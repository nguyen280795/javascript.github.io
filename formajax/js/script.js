function validateForm() {
        error_username();
        error_password();
        error_email();
        return false;

}
function btnResetClick() {
    document.getElementById("username").innerHTML = "";
    document.getElementById("password").innerHTML = "";
    document.getElementById("email").innerHTML = "";
}
function error_username() {
    var username = document.forms["myForm"]["username"].value;
    if (username.length < 8) {
        document.getElementById("error_username").innerHTML = "Username length min 8 letter";
    } else {
        document.getElementById("error_username").innerHTML = "";
    }
}
function error_password() {
    var password = document.forms["myForm"]["password"].value;
    if (password.length < 8) {
        document.getElementById("error_password").innerHTML = "Password length min 8 letter";
    } else {
        document.getElementById("error_password").innerHTML = "";
    }
}
function error_email() {
    var email = document.forms["myForm"]["email"].value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        document.getElementById("error_email").innerHTML = "Email wrong format";
    }
    else {
        document.getElementById("error_email").innerHTML = "";
    }
}