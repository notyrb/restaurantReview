function getFavourites(){
    var getFavourites = new XMLHttpRequest();
    var userID = localStorage.getItem("userID")
    getFavourites.open("GET","/favourites/"+ userID, true);
    getFavourites.onload = function(){
        favourites_array = JSON.parse(getFavourites.responseText);
        console.log(favourites_array)
        displayFavouriteRestaurants();
    }
    getFavourites.send();
}

function deleteFavourite(element){
    var response = confirm("Are you sure you want to delete this restaurant from your favourites? ")
    if (response == true){
        var favourite = new Object();
        favourite.favouriteUserID = localStorage.getItem("userID");
        restaurantID = element.id;
        favourite.favouriteRestaurantID = restaurantID;
        var deleteFavourite = new XMLHttpRequest();  
        deleteFavourite.open("DELETE", "/favourites", true);
        deleteFavourite.setRequestHeader("Content-Type", "application/json");
        deleteFavourite.onload = function () {
            location.reload()
        }
        deleteFavourite.send(JSON.stringify(favourite));
    }
} 

function displayFavouriteRestaurants(){

    var table = document.getElementById("favRestTable");
    table.innerHTML = "";
    totalRestaurants = favourites_array.length;

    for (var count = 0; count < totalRestaurants; count++) {
        var restaurantID = favourites_array[count]._id;
        var restaurantName = favourites_array[count].restaurantName;
        var cuisine = favourites_array[count].cuisine;
        var price = favourites_array[count].price;
        var thumbnail = favourites_array[count].thumbnail;
        var cell = '<div id = '+restaurantID+' class="card col-sm-9" onClick="getRestaurantDetails(this)" style = "margin:20px; height:153px"  >\
                        <img class="card-img-top" src="' + thumbnail + '" alt="Card image cap" style = "margin-left: -13.5px; width: 260px; height: 150px; cursor:pointer; margin-bottom:-110px;">\
                        <h3 style="padding-left: 280px; float:right; font-family: Proxima Nova; font-size:25px; cursor:pointer" class="card-title" item="' + count + '">' + restaurantName + '</h3>\
                        <h6 style=" color: #000000; padding-left: 280px; margin-top: 3px; font-family: Proxima Nova; font-size:16px; cursor:pointer" class="card-title" item="' + count + '" >' + cuisine + " • "+ price + ' </h6>\
                    </div>'

        var html = '<div class="deleteBtn" id ='+restaurantID+' style = "padding-left:660px; margin-top: -115px;  position:relative;"  onclick = "deleteFavourite(this)">\
                            <a type="submit" class="btn btn-primary" id=deleteBtn  style="background-color: #D44848; color:white; border: none; width: 100px; height: 40px; border-radius: 10px; font-family: Proxima Nova; font-weight: bold; line-height: 30px;">Remove</a> \
                      </div>'
        cell += html
        table.insertAdjacentHTML('beforeend', cell);
        
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