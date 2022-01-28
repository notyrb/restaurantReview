"use strict";

var db = require('../db-connection');
class RestaurantsDB{
    getAllRestaurants(callback){
        var sql = "SELECT restaurant.thumbnail, restaurant._id, restaurant.restaurantName, restaurant.price, restaurant.cuisine, region.regionName, ROUND(avg(review.userRating),1) as averageRating, count(distinct review._id) as totalReviews, count(favourites.favouriterestaurantID) as totalFavourites FROM restaurant_review.restaurant INNER JOIN region ON restaurant.regionID = region._id INNER JOIN review ON restaurant._id = review.restaurantID INNER JOIN favourites ON restaurant._id = favourites.favouriterestaurantID GROUP BY restaurant._id ORDER BY avg(review.userRating) DESC"
        db.query(sql, callback);
    }
    searchRestaurants(keyword, callback){
        var key = "%" + keyword + "%"
        var sql = "SELECT restaurant.*, region.regionName, region.regionArea, ROUND(avg(review.userRating),1) as averageRating, count(distinct review._id) as totalReviews, count(favourites.favouriterestaurantID) as totalFavourites FROM restaurant INNER JOIN region ON restaurant.regionID = region._id  INNER JOIN review ON restaurant._id = review.restaurantID INNER JOIN favourites ON restaurant._id = favourites.favouriterestaurantID WHERE restaurantName like ? GROUP BY restaurant._id ORDER BY avg(review.userRating) DESC"
        db.query(sql, [key], callback);
    }
    searchRestaurantsByCuisine(cuisine, callback){
        var sql = "SELECT restaurant.*, region.regionName, region.regionArea, ROUND(avg(review.userRating),1) as averageRating, count(distinct review._id) as totalReviews, count(favourites.favouriterestaurantID) as totalFavourites FROM restaurant INNER JOIN region ON restaurant.regionID = region._id  INNER JOIN review ON restaurant._id = review.restaurantID INNER JOIN favourites ON restaurant._id = favourites.favouriterestaurantID WHERE cuisine = ? GROUP BY restaurant._id ORDER BY avg(review.userRating) DESC"
        db.query(sql, [cuisine], callback);
    }
    searchRestaurantsByRegion(region, callback){
        var sql = "SELECT restaurant.*, region.regionName, region.regionArea, ROUND(avg(review.userRating),1) as averageRating, count(distinct review._id) as totalReviews, count(favourites.favouriterestaurantID) as totalFavourites FROM restaurant INNER JOIN region ON restaurant.regionID = region._id  INNER JOIN review ON restaurant._id = review.restaurantID INNER JOIN favourites ON restaurant._id = favourites.favouriterestaurantID WHERE regionArea = ? GROUP BY restaurant._id ORDER BY avg(review.userRating) DESC"
        db.query(sql, [region], callback);
    }
    searchRestaurantsByPrice(price, callback){
        var sql = "SELECT restaurant.*, region.regionName, region.regionArea, ROUND(avg(review.userRating),1) as averageRating, count(distinct review._id) as totalReviews, count(favourites.favouriterestaurantID) as totalFavourites FROM restaurant INNER JOIN region ON restaurant.regionID = region._id  INNER JOIN review ON restaurant._id = review.restaurantID INNER JOIN favourites ON restaurant._id = favourites.favouriterestaurantID WHERE price = ? GROUP BY restaurant._id ORDER BY avg(review.userRating) DESC"
        db.query(sql, [price], callback);
    }
    filterRestaurantsByCuisineAndRegion(cuisine, region, callback){
        var sql = "SELECT restaurant.*, region.regionName, region.regionArea, ROUND(avg(review.userRating),1) as averageRating, count(distinct review._id) as totalReviews, count(favourites.favouriterestaurantID) as totalFavourites FROM restaurant INNER JOIN region ON restaurant.regionID = region._id  INNER JOIN review ON restaurant._id = review.restaurantID INNER JOIN favourites ON restaurant._id = favourites.favouriterestaurantID WHERE cuisine = ? AND regionArea = ? GROUP BY restaurant._id ORDER BY avg(review.userRating) DESC"
        db.query(sql, [cuisine, region], callback);
    }
    filterRestaurantsByRegionAndPrice(region, price, callback){
        var sql = "SELECT restaurant.*, region.regionName, region.regionArea, ROUND(avg(review.userRating),1) as averageRating, count(distinct review._id) as totalReviews, count(favourites.favouriterestaurantID) as totalFavourites FROM restaurant INNER JOIN region ON restaurant.regionID = region._id  INNER JOIN review ON restaurant._id = review.restaurantID INNER JOIN favourites ON restaurant._id = favourites.favouriterestaurantID WHERE regionArea = ? AND price = ? GROUP BY restaurant._id ORDER BY avg(review.userRating) DESC"
        db.query(sql, [region, price], callback);
    }
    filterRestaurantsByCuisineAndPrice(cuisine, price, callback){
        var sql = "SELECT restaurant.*, region.regionName, region.regionArea, ROUND(avg(review.userRating),1) as averageRating, count(distinct review._id) as totalReviews, count(favourites.favouriterestaurantID) as totalFavourites FROM restaurant INNER JOIN region ON restaurant.regionID = region._id  INNER JOIN review ON restaurant._id = review.restaurantID INNER JOIN favourites ON restaurant._id = favourites.favouriterestaurantID WHERE cuisine = ? AND price = ? GROUP BY restaurant._id ORDER BY avg(review.userRating) DESC"
        db.query(sql, [cuisine, price], callback);
    }
    filterRestaurantsByCuisineAndRegionAndPrice(cuisine, region, price, callback){
        var sql = "SELECT restaurant.*, region.regionName, region.regionArea, ROUND(avg(review.userRating),1) as averageRating, count(distinct review._id) as totalReviews, count(favourites.favouriterestaurantID) as totalFavourites FROM restaurant INNER JOIN region ON restaurant.regionID = region._id  INNER JOIN review ON restaurant._id = review.restaurantID INNER JOIN favourites ON restaurant._id = favourites.favouriterestaurantID WHERE cuisine = ? AND regionArea = ? AND price = ? GROUP BY restaurant._id ORDER BY avg(review.userRating) DESC"
        db.query(sql, [cuisine, region, price], callback);
    }
    searchRestaurantswithCuisineFilter(keyword, cuisine, callback){
        var key = "%" + keyword + "%"
        var sql = "SELECT restaurant.*, region.*, ROUND(avg(review.userRating),1) as averageRating, count(distinct review._id) as totalReviews, count(favourites.favouriterestaurantID) as totalFavourites FROM restaurant INNER JOIN region ON restaurant.regionID = region._id  INNER JOIN review ON restaurant._id = review.restaurantID INNER JOIN favourites ON restaurant._id = favourites.favouriterestaurantID WHERE restaurantName like ? AND cuisine = ? GROUP BY restaurant._id ORDER BY avg(review.userRating) DESC"
        db.query(sql, [key,cuisine], callback);
    }
    searchRestaurantswithCuisineAndRegionFilter(keyword, cuisine, region, callback){
        var key = "%" + keyword + "%"
        var sql = "SELECT restaurant.*, region.*, ROUND(avg(review.userRating),1) as averageRating, count(distinct review._id) as totalReviews, count(favourites.favouriterestaurantID) as totalFavourites FROM restaurant INNER JOIN region ON restaurant.regionID = region._id  INNER JOIN review ON restaurant._id = review.restaurantID INNER JOIN favourites ON restaurant._id = favourites.favouriterestaurantID WHERE restaurantName like ? AND cuisine = ? AND regionArea = ? GROUP BY restaurant._id ORDER BY avg(review.userRating) DESC"
        db.query(sql, [key,cuisine,region], callback);
    }
    searchRestaurantswithCuisineAndRegionAndPriceFilter(keyword, cuisine, region, price , callback){
        var key = "%" + keyword + "%"
        var sql = "SELECT restaurant.*, region.*, ROUND(avg(review.userRating),1) as averageRating, count(distinct review._id) as totalReviews, count(favourites.favouriterestaurantID) as totalFavourites FROM restaurant INNER JOIN region ON restaurant.regionID = region._id  INNER JOIN review ON restaurant._id = review.restaurantID INNER JOIN favourites ON restaurant._id = favourites.favouriterestaurantID WHERE restaurantName like ? AND cuisine = ? AND regionArea = ? AND price = ? GROUP BY restaurant._id ORDER BY avg(review.userRating) DESC"
        db.query(sql, [key,cuisine,region,price], callback);
    }
    searchRestaurantswithCuisineAndRegionAndPriceAndRatingFilter(keyword, cuisine, region, price , rating, callback){
        var key = "%" + keyword + "%"
        var sql = "SELECT restaurant.*, region.*, ROUND(avg(review.userRating),1) as averageRating, count(distinct review._id) as totalReviews, count(favourites.favouriterestaurantID) as totalFavourites FROM restaurant INNER JOIN region ON restaurant.regionID = region._id  INNER JOIN review ON restaurant._id = review.restaurantID INNER JOIN favourites ON restaurant._id = favourites.favouriterestaurantID WHERE restaurantName like ? AND cuisine = ? AND regionArea = ? AND price = ? GROUP BY restaurant._id HAVING averageRating >= ? ORDER BY avg(review.userRating) DESC"
        db.query(sql, [key,cuisine,region,price,rating], callback);
    }
    getFeaturedRestaurantsDetails(callback){
        var sql = "SELECT restaurant.thumbnail, restaurant._id, restaurant.restaurantName, restaurant.price, restaurant.cuisine, region.regionName, ROUND(avg(review.userRating),1) as averageRating, count(distinct review._id) as totalReviews, count(favourites.favouriterestaurantID) as totalFavourites FROM restaurant_review.restaurant INNER JOIN region ON restaurant.regionID = region._id INNER JOIN review ON restaurant._id = review.restaurantID INNER JOIN favourites ON restaurant._id = favourites.favouriterestaurantID GROUP BY restaurant._id ORDER BY avg(review.userRating) DESC LIMIT 6;"
        db.query(sql,callback)
    }
    getRestaurantDetails(restaurantID, callback){
        var sql = "SELECT restaurant.*, ROUND(avg(review.userRating),1) as averageRating, count(distinct review._id) as totalReviews, count(favourites.favouriterestaurantID) as totalFavourites, region.regionName FROM restaurant INNER JOIN review ON restaurant._id = review.restaurantID INNER JOIN favourites ON restaurant._id = favourites.favouriterestaurantID INNER JOIN region ON restaurant.regionID = region._id WHERE restaurant._id = ? GROUP BY restaurant._id "
       return db.query(sql, [restaurantID], callback);
    }

    
}

module.exports = RestaurantsDB; 