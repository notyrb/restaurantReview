$(document).ready(function(){
    var token = sessionStorage.getItem("token");
    var username = localStorage.getItem("username")
    if (token != null){
        $('#registerMenu').hide();
        $('#loginMenu').hide();
        $('#profileUsername').show();
        document.getElementById("profileDropdown").textContent = username;
    }
})