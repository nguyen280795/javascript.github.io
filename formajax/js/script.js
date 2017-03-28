function validateForm() {
    var xmlHttp = null;
    var flag = 0;
    error_username();
    error_password();
    error_email();
    if (error_username() === true && error_password() === true && error_email() === true) {
        loadXmlHttp();
        sendRequest("server/server.php");
    }
}
function loadXmlHttp() {
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        try {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (e) {
        }
    }
}
function sendRequest(url) {
    var form = document.forms["myForm"];
    data = new FormData(form);
    if (xmlHttp) {
        xmlHttp.open("POST", url, true);
        xmlHttp.onreadystatechange = onCallback;
        xmlHttp.send(data);
    }

}
function onCallback() {
    if (xmlHttp.readyState === 4) {
        if (xmlHttp.status === 200) {
            alert(xmlHttp.responseText);
        }
        else {
            // alert("Lỗi:" + xmlHttp.status);
        }
    }
}
//////////////////////Validate///////////////////
//validate username
function error_username() {
    var username = document.forms["myForm"]["username"].value;
    if (username.length < 8) {
        document.getElementById("error_username").innerHTML = "Username length min 8 letter";
        return false;
    } else {
        document.getElementById("error_username").innerHTML = "";
        return true;
    }
}
//validate password
function error_password() {
    var password = document.forms["myForm"]["password"].value;
    if (password.length < 8) {
        document.getElementById("error_password").innerHTML = "Password length min 8 letter";
        return false;
    } else {
        document.getElementById("error_password").innerHTML = "";
        return true;
    }
}
// validate email
function error_email() {
    var email = document.forms["myForm"]["email"].value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        document.getElementById("error_email").innerHTML = "Email wrong format";
        return false;
    }
    else {
        document.getElementById("error_email").innerHTML = "";
        return true;
    }
}