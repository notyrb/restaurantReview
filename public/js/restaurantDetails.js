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
    var reviews = document.getElementById('reviews')
    reviews.innerHTML = ""

    for (var i = 0; i < review_array.length; i++) {
        console.log(review_array[i])
        var reviewID = review_array[i]._id;
        var username = review_array[i].username;
        var userRating = review_array[i].userRating;
        var datePosted = review_array[i].datePosted;
        var datePosted = datePosted.substring(0,15)
        var comment = review_array[i].comment;
        /*if (profilePicture != null && profilePicture != "" && profilePicture != undefined){
            profilePicture = review_array[i].profilePicture;
        }
        else{
            profilePicture = "images/avatar.jpg"
        } */
        var profilePicture = review_array[i].profilePicture;
        

        //document.getElementById("emptyComment").innerHTML = "";
        //selectedMovieId = movie_array[item]._id;
        //star = "";
        var html =  `<div class="card" style="width: 580px; height: 150px; outline: 1px;">
        <div class="col-2" style="text-align: center; padding-left:30px; padding-top: 25px;">`
        /*if (profilePicture != null || profilePicture != ""){
            image = `<img src="${profilePicture}"
                style="width: 60px; height: 60px; border-radius: 50%; ">`
            html += image;
        }
        else{
            image = `<img src="images/avatar.jpg"
                style="width: 60px; height: 60px; border-radius: 50%; ">`
            html += image;
        } */
        html += `<img src="${profilePicture}"
        style="width: 60px; height: 60px; border-radius: 50%; ">`
        html += `<h5 style="font-size: 14px; width: 63px; padding-bottom: 15px; padding-top: 7px; "> ${username}
            </h5>
        </div> 
        <div class ="col-md-6" style = "padding-left:150px; margin-top: -3px;"> `
     
        var star = "";
        for (var j = 0; j < userRating; j++) {
            star = `<i id="star1" class="fas fa-star" style="font-size: 18px; color:#B76931"></i>`;
            html += star;
        }
        if( 5 -userRating != 0){
            for (var index = 0; index < 5 -userRating; index++) {
                star = `<i id="star1" class="fas fa-star" style="font-size: 18px; color:#E8E3DF"></i>`;
                html += star;
            }
        }  
        html+= `<h6 style="padding-top:8px; width: 400px;">${comment}</h6>
        </div>
        <h7 style="margin-left: 450px; margin-top: -90px; max-width: 200px;">${datePosted}</h7> `

        if (username == localStorage.getItem("username")){
            editDeleteButtons =  `<span id = "${reviewID}" class = "editDeleteButtons" style="width:300px; padding-top: 86px; margin-left: 445px;">
            <span>Edit</span>
            <i class="fas fa-pencil-alt"></i>
            <span onclick = "deleteReview(this);" deleteReview(this); style="color:#D44848; padding-left: 5px;">Delete</span>
            <i onclick = "deleteReview(this);" class="fas fa-trash" style="color:#D44848"></i>
            </span> `
            html += editDeleteButtons;
        }
        else{
            var empty =` </div></div>`
            html+= empty  
        }
        reviews.insertAdjacentHTML('beforeend', html);
    }
}

function editReview(){

}

// function to delete review
function deleteReview(element){
    var response = confirm("Are you sure you want to delete this review?");

    if (response == true){
        var reviewID = element.parentNode.id
        var review_url = "review/" + reviewID;
        var eraseComment = new XMLHttpRequest();
        eraseComment.open("DELETE", review_url, true);
        eraseComment.onload = function() {
            getDetails();
            fetchComments();
            showRestaurantReviews();
            location.reload();
        };
        eraseComment.send();
    }
}
