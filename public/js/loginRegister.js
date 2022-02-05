//const { request } = require("express");
//const { checkUsername } = require("../../controllers/userController");

function myFunction() {
    var x = document.getElementById("passwordLogin");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
function registerMe() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var gender = document.getElementById("gender").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (firstName == "" || lastName == "" || username == "" || email == "" || password == "" || address == "" || gender == "" || phoneNumber == "" || confirmPassword == "") {
        alert("Ensure all fields are filled up!")
        return;
    }

    if (username.length > 10) {
        alert("Your username cannot be more than 15 characters! ");
        return;
    }

    if (password.length > 1 && password.length < 8) {
        alert("Your password cannot be less than 8 characters! ");
        return;
    }

    if (password != confirmPassword) {
        alert("Passwords do not match! ");
        return;
    }
    
    // use web api to check username in database
    var checkUsername = new XMLHttpRequest();
    checkUsername.open("GET", `/signup/${username}`, true)
    checkUsername.setRequestHeader("Content-Type", "application/json")
    checkUsername.onload = function () {
        var response = JSON.parse(checkUsername.responseText)
        // if username does not exist, it creates a new user account
        if (response.message == "Unique username") {
            var registerUser = new XMLHttpRequest();

            registerUser.open("POST", "http://127.0.0.1:8080/signup", true)
            registerUser.setRequestHeader("Content-Type", "application/json")
            registerUser.onload = function () {
                $('#registerModal').modal('hide');
                alert("Successfully signed up!")
            }
            var payload = { username: username, firstName: firstName, lastName: lastName, email: email, password: password, address: address, gender: gender, phoneNumber: phoneNumber }
            console.log(JSON.stringify(payload))
            registerUser.send(JSON.stringify(payload));
        }
        // if username does exist, user will be prompted to key in username again
        else {
            alert(response.message);
            return
        }
    }
    checkUsername.send() 
}

function loginMe() {
    var loginUser = new XMLHttpRequest();

    loginUser.open("POST", "http://127.0.0.1:8080/login", true)
    loginUser.setRequestHeader("Content-Type", "application/json")
    loginUser.onload = function () {
        var token = JSON.parse(loginUser.responseText);
        console.log(token.result);
        if (token.result != "Invalid") {
            localStorage.setItem("username",token.username)
            $('#loginModal').modal('hide');
            alert("Successfully logged in! Welcome, " + localStorage.getItem("username") + "!")
            document.getElementById("loginMenu").style.display = "none";
            document.getElementById("registerMenu").style.display = "none";
            document.getElementById("profileUsername").style.display = "block";
            document.getElementById("profileDropdown").textContent = token.username
            sessionStorage.setItem("token", token.result)
           // putProfilePictureOnNav();
            //profilePic = localStorage.getItem("profilePicture")
            //document.getElementById("userProfilePic").src =  profilePic;
            window.location.reload();
        }
        else {
            alert("Wrong credentials entered!")
        }
    }
    var username = document.getElementById("usernameLogin").value;
    var password = document.getElementById("passwordLogin").value;
    var payload = { username: username, password: password }
    loginUser.send(JSON.stringify(payload));
}

function logoutMe() {
    var logOut = window.confirm("Are you sure you want to log out?")
    if (logOut) {
        $('#registerMenu').show();
        $('#loginMenu').show();
        $('#profileUsername').hide();
        sessionStorage.removeItem("token")
        localStorage.clear();
        if(window.location = "profile.html" || window.location == "restaurant.html"){
            window.location.href = "index.html";
        }
    }
    else{
        null
    }


}
