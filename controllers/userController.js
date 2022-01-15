"use strict";
const User = require('../models/User');
const UsersDB = require('../models/UsersDB');
//const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var secret = "somesecretkey"

var usersDB = new UsersDB();

function getAllUsers(request, respond) {
    usersDB.getAllUsers(function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

function addUser(request, respond) {
    var firstName = request.body.firstName
    var lastName = request.body.lastName
    var username = request.body.username
    var email = request.body.email
    var password = request.body.password
    //password = bcrypt.hashSync(password, 10)
    var address = request.body.address
    var gender = request.body.firstName
    var phoneNumber = request.body.phoneNumber
    var profilePicture = request.body.profilePicture

    usersDB.addUser(username, firstName, lastName, email, password, address, gender, phoneNumber, profilePicture, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    })
}

function loginUser(request, respond) {
    var username = request.body.username;
    var password = request.body.password;
    usersDB.loginUser(username, function (error, result) {
        if (error) {
            throw error;
        }
        else {
            //const hash = result[0].password;
            //var flag = bcrypt.compareSync(password, hash);
            if(result.length>0){
                if (password == result[0].password) {
                    var token = jwt.sign(username, secret)
                    respond.json({ result: token, username:username})
                }
                else {
                    respond.json({ result: "Invalid" });
                }
            }else {
                respond.json({ result: "Invalid" });
            }
                
        }
    });
}

function deleteUser(request, respond) {
    var username = request.params.username;
    usersDB.deleteUser(username, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

function updateUser(request, respond) {
    var user = new User(null, null, request.body.firstName, request.body.lastName, request.body.email, null, request.body.address
        , request.body.gender, request.body.phoneNumber,request.body.profilePicture)
    var token = request.body.token
    try {
        var decoded = jwt.verify(token, secret);
        usersDB.updateUser(decoded, user, function (error, result) {
            if (error) {
                respond.json(error);
            }
            else {
                respond.json(result);
            }
        });
    } catch (error) {
         respond.json({ result: "Invalid token" });
    }

}

function updatePassword(request, respond) {
    var password = request.body.password;
    var token = request.body.token
    try {
        var decoded = jwt.verify(token, secret);
        usersDB.updatePassword(decoded, password, function (error, result) {
            if (error) {
                respond.json(error);
            }
            else {
                respond.json(result);
            }
        });
    } catch (error) {
         respond.json({ result: "Invalid token" });
    }

}
function getUserInfo(request, respond) {
    var token = request.body.token;
    try {
        var decoded = jwt.verify(token, secret);
        usersDB.getUserInfo(decoded, function (error, result) {
            if (error) {
                respond.json(error);
            }
            else {
                respond.json(result);
            }
        });
    } catch (error) {
        return respond.json(error);
    }
    
}

function checkUsername(request, respond) {
    var username = request.params.username;
    var message = ""
    usersDB.checkUsername(username, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            // if username exists in database
            if (result.length > 0) {
                message = "Username is already taken."
                respond.json(prepareMessage(message));
            }
            // if username does not exist in database
            else {
                message = "Unique username"
                respond.json(prepareMessage(message));
            }


        }

    });
}

function prepareMessage(message) {
    var object = { "message": message };
    return object
} 

module.exports = { getAllUsers, addUser, loginUser, deleteUser, updateUser, getUserInfo, checkUsername,updatePassword };
