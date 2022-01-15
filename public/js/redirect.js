$(document).ready(function(){
    var token = sessionStorage.getItem("token");
    if (token != null){
        $('#registerMenu').hide();
        $('#loginMenu').hide();
        $('#profileDropdown').show();
    }else{
        window.location.href = "index.html";
    }

})