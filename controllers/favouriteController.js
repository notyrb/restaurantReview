"use strict";

const Favourite = require('../models/Favourites');
const FavouritesDB = require('../models/FavouritesDB');


var favouritesDB = new FavouritesDB();

function getFavourites(request, respond){
    var favouriteUserID = request.params.id;
    favouritesDB.getFavourites(favouriteUserID,function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
} 
function addToFavourites(request, respond){
    //var favourite = new Favourite(null, request.body.favouriteUserID, request.body.favouriteRestaurantID)
    var values = [request.body.favouriteUserID, request.body.favouriteRestaurantID];
    favouritesDB.addToFavourites(values,function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function deleteFavourite(request, respond){
    var favouriteUserID = request.body.favouriteUserID;
    var favouriteRestaurantID = request.body.favouriteRestaurantID;
    favouritesDB.deleteFavourite(favouriteUserID,favouriteRestaurantID, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getFavourites,addToFavourites,deleteFavourite};