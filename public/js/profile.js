function getAccountDetails(){
    $(document).ready(function () {
    var getProfile = new XMLHttpRequest();

    getProfile.open("POST", "http://127.0.0.1:8080/userInfo", true);
    getProfile.setRequestHeader("Content-Type", "application/json");
    getProfile.onload = function () {
        var profile = JSON.parse(getProfile.responseText);

        userID = profile[0]._id
        firstName = profile[0].firstName;
        lastName = profile[0].lastName;
        email = profile[0].email;
        address = profile[0].address;
        gender = profile[0].gender;
        phoneNumber = profile[0].phoneNumber;
        profilePicture = profile[0].profilePicture;
        userPassword = profile[0].password;
        username = profile[0].username;
        localStorage.setItem("profilePicture", profilePicture);
        localStorage.setItem("userID", userID);

        if (profilePicture != null && profilePicture != "" && profilePicture != undefined){
            document.getElementById("profilePicture").src = profilePicture;
        }
        /*else if (profilePicture == undefined) {
            document.getElementById("profilePicture").src = "images/avatar.jpg"
        }  */

        console.log(profile);
        

        document.getElementById('firstName').value = firstName;
        document.getElementById('lastName').value = lastName;
        document.getElementById('email').value = email;
        document.getElementById('address').value = address;
        document.getElementById('gender').value = gender;
        document.getElementById('phoneNumber').value = phoneNumber;
       // document.getElementById('profilePicture').src = profilePicture;
        document.getElementById('password').value = userPassword;
        document.getElementById('username').value = username;

    }
    var payload = { token: token };
    getProfile.send(JSON.stringify(payload));
})}

function putProfilePictureOnNav(){
    profilePicture = profile[0].profilePicture;
    localStorage.setItem("profilePicture", profilePicture)
}

function deleteAccount() {
    deleteAccountPassword = document.getElementById("deleteAccPassword").value;
    if (deleteAccountPassword == userPassword) {
        var response = confirm("Are you sure you want to delete your account? This action cannot be undone.");
        if (response == true) {
            var deleteAccount = new XMLHttpRequest();
            username = localStorage.getItem("username")
            deleteAccount.open("DELETE", `/user/${username}`, true)
            deleteAccount.setRequestHeader("Content-Type", "application/json")
            deleteAccount.onload = function () {
                alert("Your account has been deleted.");
                localStorage.clear();
                sessionStorage.clear();
                window.location.href = "index.html";
            }
            deleteAccount.send();
        }
    }
    else {
        alert("Your password is incorrect!")
    }
}
function encode() {
    var selectedfile = document.getElementById("myinput").files;
    if (selectedfile.length > 0) {
        var imageFile = selectedfile[0];
        var fileReader = new FileReader();
        fileReader.onload = function (fileLoadedEvent) {
            profilePicture = fileLoadedEvent.target.result;
            document.getElementById("profilePicture").src = profilePicture;
        }
        fileReader.readAsDataURL(imageFile);
    }
}

const dropImage = document.querySelector("#dropImage");
dropImage.addEventListener('dragover', (event)=> {
    event.stopPropagation();
    event.preventDefault();
});
dropImage.addEventListener('drop', (event)=> {
    event.stopPropagation();
    event.preventDefault();
    const fileList = event.dataTransfer.files;
    readImage(fileList[0]);
});
readImage = (file) => {
    const reader = new FileReader();
    reader.addEventListener('load', (event) =>{
        picture = event.target.result;
        console.log(picture);
        document.getElementById('profilePicture').src = picture;
    });
    reader.readAsDataURL(file);
}

function update() {
    var updateUser = new XMLHttpRequest();

    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    address = document.getElementById("address").value;
    gender = document.getElementById("gender").value;
    phoneNumber = document.getElementById("phoneNumber").value;
    profilePicture = document.getElementById("profilePicture").src;
    console.log(profilePicture)

    updateUser.open("PUT", "http://127.0.0.1:8080/user", true)
    updateUser.setRequestHeader("Content-Type", "application/json")
    updateUser.onload = function () {
        localStorage.setItem("profilePicture", profilePicture)
        location.reload();
        document.getElementById("userProfilePic").src =  profilePicture;
        alert("Your credentials has been updated!")
    }
    var payload = { firstName: firstName, lastName: lastName, email: email, password: password, address: address, gender: gender, phoneNumber: phoneNumber, profilePicture: profilePicture, token: token }
    updateUser.send(JSON.stringify(payload));
} 

function updatePassword() {
    currentPassword = document.getElementById("currentPassword").value;
    newPassword = document.getElementById("newPassword").value;
    confirmNewPassword = document.getElementById("confirmNewPassword").value;

    if (currentPassword != 'null' && newPassword != "null" && confirmNewPassword != "null" && currentPassword != "" && newPassword != "" && confirmNewPassword != "") {
        if (currentPassword == userPassword) {
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
                        location.reload()
                    }
                    password = document.getElementById("newPassword").value;
                    var payload = { password: password, token: token }
                    updatePassword.send(JSON.stringify(payload))

                } else {
                    alert("New Passwords do not match!")
                }
            } else {
                alert("New password must contain at least 8 characters!")
            }
        } else {
            alert("Current password entered is incorrect!")
        }
    } else {
        alert("Please fill in all the fields!")
    }
} 

