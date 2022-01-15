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
                        <h7 style=" color: #504656; padding-left: 60px; margin-top: -22.5px; font-family: Proxima Nova; font-size:15px; cursor:pointer"  class="card-title" item="' + count + '" >' + totalReviews + " Reviews" + " • "+  totalFavourites + " Favourited" + ' </h7>\
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
        window.location.href = 'restaurant.html'
        
    }
    getRestaurantDetails.send();
    //var item = element.getAttribute("item");
    //currentIndex = item;
    /*document.getElementById("movieTitle").textContent = movie_array[item].title;
    document.getElementById("moviePoster").src = movie_array[item].poster;
    document.getElementById("genre").textContent = movie_array[item].genre;
    document.getElementById("director").textContent = movie_array[item].director;
    document.getElementById("cast").textContent = movie_array[item].cast;
    document.getElementById("release").textContent = movie_array[item].release;
    document.getElementById("advice").textContent = movie_array[item].advice;
    document.getElementById("story").textContent = movie_array[item].story;
    document.getElementById("trailer1").src = movie_array[item].video1;
    document.getElementById("trailer2").src = movie_array[item].video2; */
    
    
}


//This function is to display the "Now Showing" movies
function listNowShowingMovies() {
    category = "Now Showing";
    displayMovies(category);
    document.getElementById("nowMenu").classList.add("active");
    document.getElementById("comingMenu").classList.remove("active");
    document.getElementById("aboutMenu").classList.remove("active");
}

//This function is to display the "Coming Soon" movies
function listComingMovies() {
    category = "Coming Soon";
    displayMovies(category);
    document.getElementById("nowMenu").classList.remove("active");
    document.getElementById("comingMenu").classList.add("active");
    document.getElementById("aboutMenu").classList.remove("active");
}

//This function is to display the individual movies details
//whenever the user clicks on "See More"

//This function opens a new window/tab and loads the
//particular movie in the cinema website
function buyTicket() {
    window.open(movie_array[currentIndex].buy, "_blank");
}

