// function to get featured restaurant's details to display in card
function getSearchedRestaurants() {
    var searchInput = document.getElementById("searchQueryInput")

    searchInput.addEventListener("keyup", (e) => {
        searchValue = searchInput.value;
        var search = new XMLHttpRequest();
        search.open('POST', 'http://127.0.0.1:8080/search', true)
        search.setRequestHeader("Content-type", "application/json")
        search.onload = function () {
            restaurant_array = JSON.parse(search.responseText);
            console.log(restaurant_array)
            displayRestaurants();
        }

        var payload = { search: searchValue }
        search.send(JSON.stringify(payload));
    })
}

function getFilteredRestaurants() {
    var searchInput = document.getElementById("searchQueryInput")
    cuisine = document.getElementById("cuisineFilter").value;
    region = document.getElementById("locationFilter").value;
    price = document.getElementById("priceFilter").value;
    // if there is only cuisine filter
    if (cuisine != "empty" && region == "empty" && price == "empty"){
        var search = new XMLHttpRequest();
            search.open('POST', 'http://127.0.0.1:8080/cuisine', true)
            search.setRequestHeader("Content-type", "application/json")
            search.onload = function () {
                restaurant_array = JSON.parse(search.responseText);
                console.log(restaurant_array)
                displayRestaurants();
            }

            var payload = { cuisine: cuisine }
            search.send(JSON.stringify(payload));
    }
    // if there is only region filter
    else if (cuisine == "empty" && region != "empty" && price == "empty"){
        console.log(region)
        var search = new XMLHttpRequest();
            search.open('POST', 'http://127.0.0.1:8080/region', true)
            search.setRequestHeader("Content-type", "application/json")
            search.onload = function () {
                restaurant_array = JSON.parse(search.responseText);
                console.log(restaurant_array)
                displayRestaurants();
            }

            var payload = { regionArea: region }
            search.send(JSON.stringify(payload));
    }
    // if there is only price filter
    else if (cuisine == "empty" && region == "empty" && price != "empty"){
        var search = new XMLHttpRequest();
            search.open('POST', 'http://127.0.0.1:8080/price', true)
            search.setRequestHeader("Content-type", "application/json")
            search.onload = function () {
                restaurant_array = JSON.parse(search.responseText);
                console.log(restaurant_array)
                displayRestaurants();
            }

            var payload = { price: price }
            search.send(JSON.stringify(payload));
    }
    // if there is only cuisine and region filter
    else if (cuisine != "empty" && region != "empty" && price =="empty"){
        console.log(cuisine,region)
        var cuisineRegion = new XMLHttpRequest();
            cuisineRegion.open('POST', 'http://127.0.0.1:8080/cuisine/region', true)
            cuisineRegion.setRequestHeader("Content-type", "application/json")
            cuisineRegion.onload = function () {
                restaurant_array = JSON.parse(cuisineRegion.responseText);
                console.log(restaurant_array)
                displayRestaurants();
            }
            var payload = {cuisine: cuisine, regionArea:region}
            cuisineRegion.send(JSON.stringify(payload));

    }
    // if there is only cuisine and price filter
    else if (cuisine != "empty" && region == "empty" && price !="empty"){
        console.log(cuisine,region)
        var cuisineRegion = new XMLHttpRequest();
            cuisineRegion.open('POST', 'http://127.0.0.1:8080/cuisine/price', true)
            cuisineRegion.setRequestHeader("Content-type", "application/json")
            cuisineRegion.onload = function () {
                restaurant_array = JSON.parse(cuisineRegion.responseText);
                console.log(restaurant_array)
                displayRestaurants();
            }
            var payload = {cuisine: cuisine, price:price}
            cuisineRegion.send(JSON.stringify(payload));

    }
    // if there is only region and price filter
    else if (cuisine == "empty" && region != "empty" && price !="empty"){
        console.log(cuisine,region)
        var cuisineRegion = new XMLHttpRequest();
            cuisineRegion.open('POST', 'http://127.0.0.1:8080/region/price', true)
            cuisineRegion.setRequestHeader("Content-type", "application/json")
            cuisineRegion.onload = function () {
                restaurant_array = JSON.parse(cuisineRegion.responseText);
                console.log(restaurant_array)
                displayRestaurants();
            }
            var payload = {regionArea: region, price:price}
            cuisineRegion.send(JSON.stringify(payload));

    }
    // if there is cuisine, region and price filter
    else if (cuisine != "empty" && region != "empty" && price !="empty"){
        console.log(cuisine,region)
        var cuisineRegion = new XMLHttpRequest();
            cuisineRegion.open('POST', 'http://127.0.0.1:8080/cuisine/region/price', true)
            cuisineRegion.setRequestHeader("Content-type", "application/json")
            cuisineRegion.onload = function () {
                restaurant_array = JSON.parse(cuisineRegion.responseText);
                console.log(restaurant_array)
                displayRestaurants();
            }
            var payload = {cuisine: cuisine, regionArea: region, price:price}
            cuisineRegion.send(JSON.stringify(payload));

    }
    else{
        getAllRestaurants();
    } 
}

function sortRestaurants() {
    order = document.getElementById("ratingSort").value;
    // sort restaurants by highest rating  
    if (order == "highestRating") {
        restaurant_array.sort(function (a, b) {
            return b.averageRating - a.averageRating;
        });
        displayRestaurants();
    }
    // sort restaurants by lowest rating  
    else if (order == "lowestRating") {
        restaurant_array.sort(function (a, b) {
            return a.averageRating - b.averageRating;
        });
        displayRestaurants();
    }

}

function getAllRestaurants() {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://127.0.0.1:8080/restaurants', true)
    request.onload = function () {
        restaurant_array = JSON.parse(request.responseText);
        console.log(restaurant_array)
        displayRestaurants();
    }
    request.send();
}

function displayRestaurants() {

    var table = document.getElementById("restaurantTable");
    table.innerHTML = "";
    totalRestaurants = restaurant_array.length;

    for (var count = 0; count < totalRestaurants; count++) {
        var restaurantID = restaurant_array[count]._id;
        var restaurantName = restaurant_array[count].restaurantName;
        var totalReviews = restaurant_array[count].totalReviews;
        var averageRating = restaurant_array[count].averageRating;
        var averageRating = averageRating.toFixed(1);
        var cuisine = restaurant_array[count].cuisine;
        var price = restaurant_array[count].price;
        var regionName = restaurant_array[count].regionName;
        var thumbnail = restaurant_array[count].thumbnail;
        var cell = '<div id = ' + restaurantID + ' class="card col-md-3" onClick="getRestaurantDetails(this)" style = "margin:20px" >\
                        <img class="card-img-top" src="' + thumbnail + '" alt="Card image cap" style = "margin-left: -13.5px; width: 260px; height: 150px; cursor:pointer">\
                        <h5 style="padding-left:-20px; padding-top: 20px; font-family: Proxima Nova; font-size:21px; cursor:pointer" class="card-title" item="' + count + '">' + restaurantName + '</h5>\
                        <h7 style="padding-left:-20px; margin-top: -5px; font-family: Proxima Nova; font-size:15px; cursor:pointer" class="card-title" item="' + count + '">' + averageRating + '</h7>\
                        <i class = "fa fa-star" style = "color:#B76931; width:20px; height:20px; margin-top:-32px; padding-left:25px"></i>\
                        <h7 style=" color: #504656; padding-left: 60px; margin-top: -22.5px; font-family: Proxima Nova; font-size:15px; cursor:pointer"  class="card-title" item="' + count + '" >' + totalReviews + " Reviews" + ' </h7>\
                        <h7 style=" color: #000000; padding-left: -20px; margin-top: -6px; font-family: Proxima Nova; font-size:15px; cursor:pointer" class="card-title" item="' + count + '" >' + cuisine + " • " + price + " • " + regionName + ' </h7>\
                        \
                    </div>'
        table.insertAdjacentHTML('beforeend', cell);
    }
}

function getRestaurantDetails(element) {
    var restaurantID = element.id;
    var getRestaurantDetails = new XMLHttpRequest();
    getRestaurantDetails.open('GET', '/restaurants/' + restaurantID, true)
    getRestaurantDetails.onload = function () {
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



