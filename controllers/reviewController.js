"use strict";
const ReviewsDB = require('../models/ReviewsDB');
const Review = require('../models/Review');

var reviewsDB = new ReviewsDB();

function getReviews(request, respond){
    var restaurantID = request.params.id;
    reviewsDB.getReviews(restaurantID,function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getReviewsByOldest(request, respond){
    var restaurantID = request.params.id;
    reviewsDB.getReviewsByOldest(restaurantID,function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getReviewsByHighestRating(request, respond){
    var restaurantID = request.params.id;
    reviewsDB.getReviewsByHighestRating(restaurantID,function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getReviewsByLowestRating(request, respond){
    var restaurantID = request.params.id;
    reviewsDB.getReviewsByLowestRating(restaurantID,function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function addReview(request, respond){
    var now = new Date();
    var review = new Review(null, request.body.userID, request.body.restaurantID, request.body.comment, request.body.userRating, now.toString());
    reviewsDB.addReview(review, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
}
function updateReview(request, respond){
    var now = new Date();
    var review = new Review(parseInt(request.params.id), request.body.userID, request.body.restaurantID, request.body.comment, request.body.userRating, now.toString());
    reviewsDB.updateReview(review, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function likeReview(request, respond){
    var userID = request.body.likedUserID;
    var reviewID = request.body.likedReviewID;
    reviewsDB.likeReview(userID, reviewID, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function dislikeReview(request, respond){
    var userID = request.body.likedUserID;
    var reviewID = request.body.likedReviewID;
    reviewsDB.dislikeReview(userID, reviewID, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getUsersReviews(request, respond){
    var userID = request.params.userID;
    reviewsDB.getUsersReviews(userID, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
 
function deleteReview(request, respond){
    var reviewID = request.params.id;
    reviewsDB.deleteReview(reviewID, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getReviews, getReviewsByOldest ,getReviewsByHighestRating, getReviewsByLowestRating, addReview, updateReview, deleteReview, getUsersReviews, likeReview, dislikeReview};