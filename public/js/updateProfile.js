/*function encode() {

    var selectedfile = document.getElementById("myinput").files;
    if (selectedfile.length > 0) {
        var imageFile = selectedfile[0];
        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent) {
            profilePicture = fileLoadedEvent.target.result;
            document.getElementById("profilePicture").src = profilePicture;
        }
        fileReader.readAsDataURL(imageFile);
    }
}

function update() {
    var updateUser = new XMLHttpRequest();

    updateUser.open("PUT", "http://127.0.0.1:8080/user", true)
    updateUser.setRequestHeader("Content-Type", "application/json")
    updateUser.onload = function () {
        alert("Your credentials has been updated!")
    }

    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    address = document.getElementById("address").value;
    gender = document.getElementById("gender").value;
    phoneNumber = document.getElementById("phoneNumber").value;
    console.log(profilePicture)

    var payload = { firstName: firstName, lastName: lastName, email: email, password: password, address: address, gender: gender, phoneNumber: phoneNumber, profilePicture: profilePicture, token: token }
    updateUser.send(JSON.stringify(payload));
}

function updatePassword() {
    currentPassword = document.getElementById("currentPassword").value;
    newPassword = document.getElementById("newPassword").value;
    confirmNewPassword = document.getElementById("confirmNewPassword").value;
    password = document.getElementById("password")
    console.log(password)

    if (currentPassword != 'null' && newPassword != "null" && confirmNewPassword != "null" && currentPassword != "" && newPassword != "" && confirmNewPassword != "") {
        if (currentPassword == password) {
            if (newPassword.length >= 8) {
                if (newPassword == confirmNewPassword) {
                    response = confirm("Are you sure you want to change your password?")
                    if (response == false) {
                        return
                    }
                    var updatePassword = new XMLHttpRequest();

                    updatePassword.open("PUT", "http://127.0.0.1:8080/user/password", true)
                    updatePassword.setRequestHeader("Content-Type", "application/json")
                    updatePassword.onload = function () {
                        alert("Your credentials has been updated!")
                    }
                    password = document.getElementById("newPassword").value;
                    updatePassword.send(JSON.stringify(password))

                }else{
                    alert("Passwords do not match!")
                }
            } else{
                alert("New password must contain at least 8 characters!")
            }
        }else{
            alert("Current password entered is incorrect!")
        }
    }else{
        alert("Please fill in all the fields!")
    }

} */


 