"use strict";

var db = require('../db-connection');

class UsersDB{
    getAllUsers(callback){
        var sql = "SELECT * FROM restaurant_review.user";
        db.query(sql, callback);
    }
    addUser(username, firstName, lastName, email, password, address, gender, phoneNumber, profilePicture, callback){
        var sql = "INSERT INTO restaurant_review.user (username, firstName, lastName, email, password, address, gender, phoneNumber, profilePicture) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        db.query(sql, [username, firstName, lastName, email, password, address, gender, phoneNumber, profilePicture], callback);
    }
    loginUser(username,callback){
        var sql = "SELECT password FROM restaurant_review.user WHERE username = ?"
        db.query(sql, [username], callback);
    }
    deleteUser(username, callback){
        var sql = "DELETE from user WHERE username = ?";
        return db.query(sql, [username], callback);
    }
    updateUser(username, user, callback){
        var sql = "UPDATE restaurant_review.user SET firstName = ?, lastName = ?, email = ?, address = ?, gender = ?, phoneNumber = ?, profilePicture = ? WHERE username = ?";
        db.query(sql, [user.getFirstName(), user.getLastName(), user.getEmail(),
        user.getAddress(), user.getGender(), user.getPhoneNumber(), user.getProfilePicture(), username], callback);
    }
    updatePassword(username, password, callback){
        var sql = "UPDATE restaurant_review.user SET password = ? WHERE username = ?";
        db.query(sql, [password, username], callback);
    }
    getUserInfo(username, callback){
        var sql = "SELECT distinct * FROM restaurant_review.user WHERE username= ?";
        return db.query(sql, [username], callback);
    }
    checkUsername(username, callback){
        var sql = "SELECT * FROM restaurant_review.user WHERE username = ?";
        return db.query(sql, username, callback);
    }
    
} 

module.exports = UsersDB;