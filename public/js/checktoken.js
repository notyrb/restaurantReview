$(document).ready(function(){
    var token = sessionStorage.getItem("token");
    var username = localStorage.getItem("username")
    var profilePic = localStorage.getItem("profilePicture")
    if (token != null){
        $('#registerMenu').hide();
        $('#loginMenu').hide();
        $('#profileUsername').show();
        document.getElementById("profileDropdown").textContent = username;
        if(profilePic != "null" && profilePic != "" && profilePic != undefined){
            document.getElementById("userProfilePic").src =  profilePic;
        }
        
    }
})