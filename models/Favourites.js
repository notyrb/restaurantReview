"use strict";

class Favourite{
    constructor(id, favouriteUserID, favouriteRestaurantID){
        this.id = id;
        this.favouriteUserID = favouriteUserID;
        this.favouriteRestaurantID = favouriteRestaurantID;
    }
    getId(){
        return this.id;
    }
    getFavouriteUserID(){
        return this.favouriteUserID;
    }
    getFavouriteRestaurantID(){
        return this.favouriteRestaurantID;
    }
    setFavouriteUserID(){
        return this.favouriteUserID;
    }
    setFavouriteRestaurantID(){
        return this.favouriteRestaurantID;
    }
}
module.exports = Favourite