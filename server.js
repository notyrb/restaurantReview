var express = require("express"); // using the express framework

var restaurantController = require('./controllers/restaurantController'); // set restaurantController to the restaurantController class
var userController = require('./controllers/userController'); // set userController to the userController class
var reviewController = require('./controllers/reviewController');
var favouriteController = require('./controllers/favouriteController');
var app = express();

app.use(express.static("./public"));
app.use(express.json());

app.route('/restaurants').get(restaurantController.getAllRestaurants);
app.route('/restaurants/:id').get(restaurantController.getRestaurantDetails);
app.route('/featuredRestaurants').get(restaurantController.getFeaturedRestaurantsDetails);
app.route('/search').post(restaurantController.searchRestaurants);
app.route('/cuisine').post(restaurantController.searchRestaurantsByCuisine);
app.route('/region').post(restaurantController.searchRestaurantsByRegion);
app.route('/price').post(restaurantController.searchRestaurantsByPrice);
app.route('/cuisine/region').post(restaurantController.filterRestaurantsByCuisineAndRegion);
app.route('/cuisine/price').post(restaurantController.filterRestaurantsByCuisineAndPrice);
app.route('/region/price').post(restaurantController.filterRestaurantsByRegionAndPrice);
app.route('/cuisine/region/price').post(restaurantController.filterRestaurantsByCuisineAndRegionAndPrice);
app.route('/search/cuisine').post(restaurantController.searchRestaurantswithCuisineFilter);
app.route('/search/cuisine/region').post(restaurantController.searchRestaurantswithCuisineAndRegionFilter);
app.route('/search/cuisine/region/price').post(restaurantController.searchRestaurantswithCuisineAndRegionAndPriceFilter);
app.route('/search/cuisine/region/price/rating').post(restaurantController.searchRestaurantswithCuisineAndRegionAndPriceAndRatingFilter);

app.route('/signup').post(userController.addUser)
app.route('/signup/:username').get(userController.checkUsername)
app.route('/login').post(userController.loginUser);
app.route('/user').get(userController.getAllUsers);
app.route('/user/:username').delete(userController.deleteUser)
app.route('/user').put(userController.updateUser)
app.route('/userInfo').post(userController.getUserInfo)
app.route('/user/password').put(userController.updatePassword);
app.route('/feedback').post(userController.sendFeedback);

app.route('/review/:id')
    .get(reviewController.getReviews)
    .delete(reviewController.deleteReview)
    .put(reviewController.updateReview);
app.route('/usersReviews/:userID')
    .get(reviewController.getUsersReviews);
app.route('/review/:id/oldest')
    .get(reviewController.getReviewsByOldest);
app.route('/review/:id/highestRating')
    .get(reviewController.getReviewsByHighestRating)
app.route('/review/:id/lowestRating')
    .get(reviewController.getReviewsByLowestRating)
app.route('/review')
    .post(reviewController.addReview);
app.route('/likeReview').put(reviewController.likeReview);
app.route('/dislikeReview').delete(reviewController.dislikeReview);

app.route('/favourites/:id').get(favouriteController.getFavourites);
app.route('/favourites').post(favouriteController.addToFavourites)
    .delete(favouriteController.deleteFavourite);



app.listen(8080, "127.0.0.1");     // start the nodejs to be listening for incoming request @ port 8080
console.log("web server running @ http://127.0.0.1:8080"); // output to console