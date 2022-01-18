$(document).ready(function(){
    var token = sessionStorage.getItem("token");
    var username = localStorage.getItem("username")
    var profilePicture = localStorage.getItem("profilePicture")
    if (token != null){
        $('#registerMenu').hide();
        $('#loginMenu').hide();
        $('#profileUsername').show();
        document.getElementById("profileDropdown").textContent = username;
        document.getElementById("userProfilePic").src =  profilePicture;
    }
})