$(document).ready(function(){
    var token = sessionStorage.getItem("token");
    if (token != null){
        $('#registerMenu').hide();
        $('#loginMenu').hide();
        $('#profileUsername').show();
    }else{
        window.location.href = "index.html";
    }

})