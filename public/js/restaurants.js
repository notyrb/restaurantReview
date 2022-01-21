//This function is to call the movies api and get all the movies
//that is showing in Shaw Theatres for Showing Now and Coming Soon

//const { request } = require("express");
//const Review = require("../../models/Review");

//const req = require("express/lib/request");

/*function getMovieData() {
    var request = new XMLHttpRequest();
    request.open('GET', movie_url, true);
    //This function will be called when data returns from the web api    
    request.onload = function () {
        //get all the movies records into our movie array        
        movie_array = JSON.parse(request.responseText);
        console.log(movie_array)
        //Fetch the comments as well        
        //fetchComments();
         // output to console        
        //call the function so as to display all movies tiles for "Now Showing"        	
        displayMovies(category);
    };

    //This command starts the calling of the movies web api    
    request.send();
} */
function getFeaturedRestaurants(){
    var request = new XMLHttpRequest();
    request.open('GET', 'http://127.0.0.1:8080/featuredRestaurants', true)
    request.onload = function(){
        restaurant_array = JSON.parse(request.responseText);
        console.log(restaurant_array)
        displayRestaurants();
    }
    request.send();
}

function displayRestaurants(){
    var table = document.getElementById("restaurantsTable");
    table.innerHTML = "";
    totalRestaurants = restaurant_array.length;
    //var restaurantName = restaurant_array[count].restaurantName;
    //console.log("This is" + restaurantName)

    for (var count = 0; count < totalRestaurants; count++) {
        var restaurantID = restaurant_array[count]._id;
        var restaurantName = restaurant_array[count].restaurantName;
        var totalReviews = restaurant_array[count].totalReviews;
        var averageRating = restaurant_array[count].averageRating;
        var averageRating = averageRating.toFixed(1);
        var totalFavourites = restaurant_array[count].totalFavourites;
        var cuisine = restaurant_array[count].cuisine;
        var price = restaurant_array[count].price;
        var regionName = restaurant_array[count].regionName;
        var thumbnail = restaurant_array[count].thumbnail;
        var cell = '<div id = '+restaurantID+' class="card col-md-3" onClick="getRestaurantDetails(this)" style = "margin:30px" >\
                        <img class="card-img-top" src="' + thumbnail + '" alt="Card image cap" style = "margin-left: -13.5px; width: 260px; height: 150px; cursor:pointer">\
                        <h5 style="padding-left:-20px; padding-top: 20px; font-family: Proxima Nova; font-size:21px; cursor:pointer" class="card-title" item="' + count + '">' + restaurantName + '</h5>\
                        <h7 style="padding-left:-20px; margin-top: -5px; font-family: Proxima Nova; font-size:15px; cursor:pointer" class="card-title" item="' + count + '">' + averageRating + '</h7>\
                        <i class = "fa fa-star" style = "color:#B76931; width:20px; height:20px; margin-top:-32px; padding-left:25px"></i>\
                        <h7 style=" color: #504656; padding-left: 60px; margin-top: -22.5px; font-family: Proxima Nova; font-size:15px; cursor:pointer"  class="card-title" item="' + count + '" >' + totalReviews + " Reviews" + ' </h7>\
                        <h7 style=" color: #000000; padding-left: -20px; margin-top: -6px; font-family: Proxima Nova; font-size:15px; cursor:pointer" class="card-title" item="' + count + '" >' + cuisine + " • "+ price + " • "+ regionName +' </h7>\
                        \
                    </div>'
        table.insertAdjacentHTML('beforeend', cell);
       // movieCount++;
        
    }

}

function getRestaurantDetails(element) {
    var restaurantID = element.id;
    var getRestaurantDetails = new XMLHttpRequest();
    getRestaurantDetails.open('GET', '/restaurants/' + restaurantID, true)
    getRestaurantDetails.onload = function(){
        restaurantDetails = JSON.parse(getRestaurantDetails.responseText)
        console.log(restaurantDetails)
        sessionStorage.setItem('restaurantID', restaurantDetails[0]._id);
        sessionStorage.setItem('restaurantName', restaurantDetails[0].restaurantName);
        sessionStorage.setItem('cuisine', restaurantDetails[0].cuisine);
        sessionStorage.setItem('rating', restaurantDetails[0].averageRating.toFixed(1));
        sessionStorage.setItem('description', restaurantDetails[0].description);
        sessionStorage.setItem('location', restaurantDetails[0].location);
        sessionStorage.setItem('contact', restaurantDetails[0].contact);
        sessionStorage.setItem('price', restaurantDetails[0].price);
        sessionStorage.setItem('website', restaurantDetails[0].website);
        sessionStorage.setItem('picture', restaurantDetails[0].picture);
        sessionStorage.setItem('totalReviews', restaurantDetails[0].totalReviews);
        sessionStorage.setItem('totalFavourites', restaurantDetails[0].totalFavourites);
        sessionStorage.setItem('openingHours', restaurantDetails[0].openingHours);
        sessionStorage.setItem('longtitude', restaurantDetails[0].longtitude);
        sessionStorage.setItem('latitude', restaurantDetails[0].latitude);
        sessionStorage.setItem('regionName', restaurantDetails[0].regionName);
        window.location.href = 'restaurant.html'
        
    }
    getRestaurantDetails.send()
}



