"use strict";

var db = require('../db-connection');

class FavouritesDB{
    getFavourites(favouriteUserID, callback){
        var sql = "SELECT restaurant.*, favourites._id as favouriteID FROM favourites INNER JOIN restaurant ON favourites.favouriteRestaurantID = restaurant._id WHERE favouriteUserID = ? ORDER BY favouriteID DESC"
        return db.query(sql, [favouriteUserID], callback);
    }
    addToFavourites(favourite,callback){
        var sql = "INSERT INTO restaurant_review.favourites (favouriteUserID, favouriteRestaurantID) VALUES (?, ?)"
        db.query(sql, favourite , callback)
    }
    deleteFavourite(favouriteUserID, favouriteRestaurantID, callback){
        var sql = "DELETE FROM restaurant_review.favourites WHERE favouriteUserID = ? AND favouriteRestaurantID = ?"
        db.query(sql, [favouriteUserID, favouriteRestaurantID] , callback)
    }
    

}

module.exports = FavouritesDB; 