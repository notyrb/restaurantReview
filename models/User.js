"use strict";

class User{
    constructor(id, username, firstName, lastName, email, password, address, gender, phoneNumber, profilePicture){
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.address = address;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
        this.profilePicture = profilePicture;
    }

    getID(){
        return this.id;
    }
    getUsername(){
        return this.username;
    }
    getFirstName(){
        return this.firstName;
    }
    getLastName(){
        return this.lastName;
    }
    getEmail(){
        return this.email;
    }
    getPassword(){
        return this.password;
    }
    getAddress(){
        return this.address;
    }
    getGender(){
        return this.gender;
    }
    getPhoneNumber(){
        return this.phoneNumber;
    }
    getProfilePicture(){
        return this.profilePicture;
    }

}
module.exports = User;