"use strict";

var db = require('../db-connection');

class FavouritesDB{
    getFavourites(favouriteUserID, callback){
        var sql = "SELECT restaurant.* FROM favourites INNER JOIN restaurant ON favourites.favouriteRestaurantID = restaurant._id WHERE favouriteUserID = ?"
        return db.query(sql, [favouriteUserID], callback);
    }
    addToFavourites(favourite,callback){
        var sql = "INSERT INTO restaurant_review.favourites (favouriteUserID, favouriteRestaurantID) VALUES (?, ?)"
        db.query(sql, favourite , callback)
    }
    deleteFavourite(favouriteID,callback){
        var sql = "DELETE FROM restaurant_review.favourites WHERE _id = ?"
        db.query(sql, [favouriteID] , callback)
    }
    

}

module.exports = FavouritesDB; 