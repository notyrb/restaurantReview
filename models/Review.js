"use strict";

class Review {
    constructor(id, userID, restaurantID, comment, userRating, datePosted) {
        this.id = id;
        this.userID = userID;
        this.restaurantID = restaurantID;
        this.comment = comment;
        this.userRating = userRating;
        this.datePosted = datePosted;
    }

    getId() {
        return this.id;
    }

    getUserID() {
        return this.userID;
    }

    getRestaurantID() {
        return this.restaurantID;
    }

    getComment() {
        return this.comment;
    }

    getUserRating() {
        return this.userRating;
    }

    getDatePosted() {
        return this.datePosted;
    }

    setUserID(userID) {
        this.userID = userID;
    }

    setRestaurantID(restaurantID) {
        this.restaurantID = restaurantID;
    }

    setComment(comment) {
        this.comment = comment;
    }

    setUserRating(userRating) {
        this.userRating = userRating;
    }

    setDatePosted(datePosted) {
        this.datePosted = datePosted;
    }

}

module.exports = Review;