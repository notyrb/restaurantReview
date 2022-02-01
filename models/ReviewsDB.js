"use strict";

var db = require('../db-connection');

class ReviewsDB{
    getReviews(restaurantID, callback){
        var sql = "SELECT review.*, user.username, user.profilePicture, restaurant.restaurantName,  coalesce(COUNT(likedReviewID),0) AS `totalLikes` FROM review LEFT JOIN likedreview ON review._id = likedreview.likedReviewID INNER JOIN user ON review.userID = user._id INNER JOIN restaurant ON review.restaurantID = restaurant._id WHERE review.restaurantID = ? GROUP BY  _id ORDER BY _id DESC  "
       return db.query(sql, [restaurantID], callback);
    }
    getReviewsByOldest(restaurantID, callback){
        var sql = "SELECT review.*, user.username, user.profilePicture, restaurant.restaurantName FROM ((review INNER JOIN user ON review.userID = user._id) INNER JOIN restaurant ON review.restaurantID = restaurant._id) WHERE review.restaurantID = ? ORDER BY _id ASC "
       return db.query(sql, [restaurantID], callback);
    }
    getReviewsByHighestRating(restaurantID, callback){
        var sql = "SELECT review.*, user.username, user.profilePicture, restaurant.restaurantName FROM ((review INNER JOIN user ON review.userID = user._id) INNER JOIN restaurant ON review.restaurantID = restaurant._id) WHERE review.restaurantID = ? ORDER BY userRating DESC "
       return db.query(sql, [restaurantID], callback);
    }

    getReviewsByLowestRating(restaurantID, callback){
        var sql = "SELECT review.*, user.username, user.profilePicture, restaurant.restaurantName FROM ((review INNER JOIN user ON review.userID = user._id) INNER JOIN restaurant ON review.restaurantID = restaurant._id) WHERE review.restaurantID = ? ORDER BY userRating ASC "
       return db.query(sql, [restaurantID], callback);
    }
    addReview(review, callback){
        var sql = "INSERT INTO restaurant_review.review (userID, restaurantID, comment, userRating, datePosted) VALUES (?, ?, ?, ?, ?)";
        db.query(sql, [review.getUserID(), review.getRestaurantID(), review.getComment(), review.getUserRating(), review.getDatePosted()], callback);
    }
    updateReview(review, callback){
        var sql = "UPDATE review SET comment = ?, userRating = ?, datePosted = ? WHERE _id = ?";
        return db.query(sql, [review.getComment(), review.getUserRating(), review.getDatePosted(), review.getId()], callback);
    }
    getUsersReviews(userID, callback){
        var sql = "SELECT review.*, user.username, user.profilePicture, restaurant.restaurantName FROM ((review INNER JOIN user ON review.userID = user._id) INNER JOIN restaurant ON review.restaurantID = restaurant._id) WHERE review.userID = ? ORDER BY restaurant.restaurantName"
        return db.query(sql, [userID], callback);
    }
    deleteReview(reviewID, callback){
        var sql = "DELETE from review WHERE _id = ?";
        return db.query(sql, [reviewID], callback);
    }
    likeReview(userID, reviewID,callback){
        var sql = "INSERT INTO restaurant_review.likedreview (likedUserID, likedReviewID) VALUES (?, ?)"
        db.query(sql,[userID,reviewID] , callback)
    }
    dislikeReview(userID, reviewID,callback){
        var sql = "DELETE FROM restaurant_review.likedreview WHERE likedUserID = ? AND likedReviewID = ?"
        db.query(sql,[userID,reviewID] , callback)
    }
}

module.exports = ReviewsDB;
