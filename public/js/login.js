//const { request } = require("express");

/*function loginMe() {
    var loginUser = new XMLHttpRequest();

    loginUser.open("POST", "http://127.0.0.1:8080/login", true)
    loginUser.setRequestHeader("Content-Type", "application/json")
    loginUser.onload = function () {
        $('#loginModal').modal('hide');
        alert("Successfully logged in!")
        var token = JSON.parse(loginUser.responseText);
        console.log(token.result);   
    }
    var payload = { username: username, firstName: firstName, lastName: lastName, email: email, password: password, address: address, gender: gender, phoneNumber: phoneNumber }
    loginUser.send(JSON.stringify(payload));


    var username = document.getElementById("usernameLogin").value;
    var password = document.getElementById("passwordLogin").value;
    var payload = {username:username, password:password}
    loginUser.send(JSON.stringify(payload));


}
var btn = document.getElementById("loginBtn");
console.log(btn)
btn.addEventListener("click", function() {
    var loginUser = new XMLHttpRequest();

    loginUser.open("POST", "http://127.0.0.1:8080/login", true)
    loginUser.setRequestHeader("Content-Type", "application/json")
    loginUser.onload = function () {
        $('#loginModal').modal('hide');
        alert("Successfully logged in!")
        var token = JSON.parse(loginUser.responseText);
        console.log(token.result);   
    }
    var payload = { username: username, firstName: firstName, lastName: lastName, email: email, password: password, address: address, gender: gender, phoneNumber: phoneNumber }
    loginUser.send(JSON.stringify(payload));

    var username = document.getElementById("usernameLogin").value;
    var password = document.getElementById("passwordLogin").value;
    var payload = {username:username, password:password}
    loginUser.send(JSON.stringify(payload));
	
}, false); */