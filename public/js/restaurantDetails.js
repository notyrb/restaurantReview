var location;
function getDetails() {
    restaurantName = sessionStorage.getItem("restaurantName")
    cuisine = sessionStorage.getItem("cuisine")
    averageRating = sessionStorage.getItem("rating")
    description = sessionStorage.getItem("description")
    contact = sessionStorage.getItem("contact")
    price = sessionStorage.getItem("price")
    website = sessionStorage.getItem("website")
    picture = sessionStorage.getItem("picture")
    totalReviews = sessionStorage.getItem("totalReviews")
    totalFavourites = sessionStorage.getItem("totalFavourites")
    openingHours = sessionStorage.getItem("openingHours")
    address = sessionStorage.getItem("location")



    document.getElementById("restaurantName").textContent = restaurantName
    document.getElementById("ratingNumber").textContent = averageRating
    document.getElementById("totalReviews").textContent = totalReviews
    document.getElementById("totalRatings").textContent = totalReviews
    document.getElementById("cuisine").textContent = cuisine
    document.getElementById("location").textContent = address
    document.getElementById("description").textContent = description
    document.getElementById("phoneNumber").textContent = contact
    document.getElementById("openingHours").textContent = openingHours;
    document.getElementById("website").textContent = website;
    document.getElementById("website").setAttribute('href', website)
    document.getElementById("picture").setAttribute('src', picture)
    //showStarRating();
    showDollarSigns();
    fetchComments();
    
}



/*function showStarRating(){
    switch (averageRating){
        case 1:

    }
} */


function showDollarSigns() {
    if (price == "$") {
        document.getElementById("dollar1").style.color = "black";
    }
    else if (price == "$$") {
        document.getElementById("dollar1").style.color = "black";
        document.getElementById("dollar2").style.color = "black";
    }
    else if (price == "$$$") {
        document.getElementById("dollar1").style.color = "black";
        document.getElementById("dollar2").style.color = "black";
        document.getElementById("dollar3").style.color = "black"
    }
}

function fetchComments() {
    var request = new XMLHttpRequest();
    restaurantID = sessionStorage.getItem("restaurantID")
    request.open('GET', `/review/${restaurantID}`, true);

    //This command starts the calling of the comments api
    request.onload = function () {
        //get all the comments records into our comments array
        review_array = JSON.parse(request.responseText);
        showRestaurantReviews()
    };

    request.send();
}

function showRestaurantReviews() {
    //document.getElementById("emptyComment").innerHTML = "No review yet. Create one now";
    //var item = element.getAttribute("item");
    //currentIndex = item;
    //document.getElementById("review").textContent = "Review for " + movie_array[item].title;
    //document.getElementById("commentBody").textContent = "";

    for (var i = 0; i < review_array.length; i++) {
        console.log(review_array[i])
        var reviewID = review_array[i]._id;
        var username = review_array[i].username;
        var userRating = review_array[i].userRating;
        var profilePicture = review_array[i].profilePicture;
        var datePosted = review_array[i].datePosted;
        var comment = review_array[i].comment;
        //document.getElementById("emptyComment").innerHTML = "";
        //selectedMovieId = movie_array[item]._id;
        //star = "";
        var html = '<div class="text-center" style="width:100%;">                                                           \
                            <div class="card">                                                                                  \
                                <div class="card-body">                                                                         \
                                    <p class="card-text" id="rating' + i + '">' + comment_array[i].review + "</p>               \
                                    <small>by " + comment_array[i].username + " @ " + comment_array[i].datePosted + "</small>   \
                                </div>                                                                                          \
                            </div>                                                                                              \
                        </div>";
        document.getElementById("commentBody").insertAdjacentHTML('beforeend', html);

        var star = "";
        for (var j = 0; j < comment_array[i].rating; j++) {
            console.log(i);
            star += "<img src='images/popcorn.png' style='width:50px' />";
        }
        star += "<i class='far fa-trash-alt fa-2x edit' data-dismiss='modal' item='" + i + "' onClick='deleteComment(this)' ></i>";
        star += "<i class='far fa-edit fa-2x edit' data-toggle='modal' data-target='#editCommentModal' data-dismiss='modal' item='" + i + "' onClick='editComment(this)' ></i>";
        document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");

    }
}