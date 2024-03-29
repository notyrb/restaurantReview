"use strict";
const req = require('express/lib/request');
const RestaurantsDB = require('../models/RestaurantsDB');

var restaurantsDB = new RestaurantsDB();

function getAllRestaurants(request, respond){
    restaurantsDB.getAllRestaurants(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function searchRestaurants(request, respond){
    var searchTerm = request.body.search
    restaurantsDB.searchRestaurants(searchTerm, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function searchRestaurantsByCuisine(request, respond){
    var cuisine = request.body.cuisine
    restaurantsDB.searchRestaurantsByCuisine(cuisine, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function searchRestaurantsByRegion(request, respond){
    var region = request.body.regionArea
    restaurantsDB.searchRestaurantsByRegion(region, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function searchRestaurantsByPrice(request, respond){
    var price = request.body.price
    restaurantsDB.searchRestaurantsByPrice(price, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function filterRestaurantsByCuisineAndRegion(request, respond){
    var cuisine = request.body.cuisine
    var region = request.body.regionArea
    restaurantsDB.filterRestaurantsByCuisineAndRegion(cuisine, region, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function filterRestaurantsByCuisineAndPrice(request, respond){
    var cuisine = request.body.cuisine
    var price = request.body.price
    restaurantsDB.filterRestaurantsByCuisineAndPrice(cuisine, price, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function filterRestaurantsByRegionAndPrice(request, respond){
    var price = request.body.price
    var region = request.body.regionArea
    restaurantsDB.filterRestaurantsByRegionAndPrice(region, price, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function filterRestaurantsByCuisineAndRegionAndPrice(request, respond){
    var cuisine = request.body.cuisine
    var region = request.body.regionArea
    var price = request.body.price
    restaurantsDB.filterRestaurantsByCuisineAndRegionAndPrice(cuisine, region, price, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function searchRestaurantswithCuisineFilter(request, respond){
    var searchTerm = request.body.search
    var cuisine = request.body.cuisine
    restaurantsDB.searchRestaurantswithCuisineFilter(searchTerm, cuisine, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function searchRestaurantswithCuisineAndRegionFilter(request, respond){
    var searchTerm = request.body.search
    var cuisine = request.body.cuisine
    var region = request.body.regionArea
    restaurantsDB.searchRestaurantswithCuisineAndRegionFilter(searchTerm, cuisine, region, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function searchRestaurantswithCuisineAndRegionAndPriceFilter(request, respond){
    var searchTerm = request.body.search
    var cuisine = request.body.cuisine
    var region = request.body.regionArea
    var price = request.body.price
    restaurantsDB.searchRestaurantswithCuisineAndRegionAndPriceFilter(searchTerm, cuisine, region, price, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function searchRestaurantswithCuisineAndRegionAndPriceAndRatingFilter(request, respond){
    var searchTerm = request.body.search
    var cuisine = request.body.cuisine
    var region = request.body.regionArea
    var price = request.body.price
    var rating = request.body.rating
    restaurantsDB.searchRestaurantswithCuisineAndRegionAndPriceAndRatingFilter(searchTerm, cuisine, region, price,rating, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
} 
function getRestaurantDetails(request, respond){
    var restaurantID = request.params.id
    restaurantsDB.getRestaurantDetails(restaurantID,function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getFeaturedRestaurantsDetails(request, respond){
    restaurantsDB.getFeaturedRestaurantsDetails(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
} 



module.exports = {getAllRestaurants,searchRestaurants,getFeaturedRestaurantsDetails,getRestaurantDetails,searchRestaurantsByCuisine,searchRestaurantswithCuisineFilter
,searchRestaurantswithCuisineAndRegionFilter, searchRestaurantswithCuisineAndRegionAndPriceFilter,searchRestaurantswithCuisineAndRegionAndPriceAndRatingFilter, filterRestaurantsByCuisineAndRegion,searchRestaurantsByRegion
, filterRestaurantsByCuisineAndRegionAndPrice, searchRestaurantsByPrice, filterRestaurantsByRegionAndPrice, filterRestaurantsByCuisineAndPrice}