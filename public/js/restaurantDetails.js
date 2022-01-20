var rating;
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
    getRatingInformation();
    
}

function getRatingInformation(){
    var restaurantID = sessionStorage.getItem("restaurantID")
    var getRating = new XMLHttpRequest();
    getRating.open('GET', "/restaurants/" + restaurantID, true)
    getRating.onload = function(){
        restaurantDetails = JSON.parse(getRating.responseText)
        sessionStorage.setItem("rating", restaurantDetails[0].averageRating.toFixed(1))
    }
    getRating.send()

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
        var profilePicture = review_array[i].profilePicture;
        if (profilePicture == "null" || profilePicture == "" || profilePicture == undefined){
            profilePicture = "images/avatar.jpg"
        }
        
        //var profilePicture = review_array[i].profilePicture;
        

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
            editDeleteButtons =  `<span id = "${reviewID}" class = "editDeleteButtons" style="width:300px; padding-top: 86px; margin-left: 445px; cursor:pointer;">
            <span data-toggle="modal" data-target="#editReviewModal" item=` + i + ` onclick = "editReview(this)">Edit</span>
            <i class="fas fa-pencil-alt" data-toggle="modal" data-target="#editReviewModal" ></i>
            <span onclick = "deleteReview(this);" deleteReview(this); style="color:#D44848; padding-left: 5px;">Delete</span>
            <i onclick = "deleteReview(this);" class="fas fa-trash" style="color:#D44848;"></i>
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

function newComment() {
    //Initialise each HTML input elements in the modal window with default value.
    rating = 0;
    document.getElementById("userComments").value = "";
}


// Submit or send the new comment to the server to be added.
function addReview() {
    var review = new Object();
    review.restaurantID = sessionStorage.getItem("restaurantID");
    review.userID = localStorage.getItem("userID");
    review.comment = document.getElementById("userComments").value;
    review.userRating = rating;

    if(review.comment == "" || review.userRating == 0){
        alert("Ensure all the fields are filled up!")
        return;
    }

    var postComment = new XMLHttpRequest(); // new HttpRequest instance to send comment

    postComment.open("POST", "/review", true); //Use the HTTP POST method to send data to server

    postComment.setRequestHeader("Content-Type", "application/json");
    postComment.onload = function () {
        sessionStorage.setItem("totalReviews", parseInt(totalReviews) +1)
            getDetails();
            fetchComments();
            location.reload();
    };
    // Convert the data in Comment object to JSON format before sending to the server.
    postComment.send(JSON.stringify(review));
}

//This function allows the user to mouse hover the gray stars
//so that it will turn to a colored version when hovered
function rateIt(element) {
    var num = element.getAttribute("value");
    console.log(num)
    var classname = "userRating"
    var ratings = document.getElementsByClassName(classname);
    var classTarget = "." + classname;

    // This is another way of writing 'for' loop, which initialises the 
    // stars to gray
    for (let rating of ratings) {
        rating.style.color = "#D6D6D6"
    }
    changeStarRatingColour(num, classTarget);
}

function editRateIt(element) {
    var num = element.getAttribute("value");
    console.log(num)
    var classname = "editUserRating"
    var ratings = document.getElementsByClassName(classname);
    var classTarget = "." + classname;

    // This is another way of writing 'for' loop, which initialises the 
    // stars to gray
    for (let rating of ratings) {
        rating.style.color = "#D6D6D6"
    }
    changeStarRatingColour(num, classTarget);
}

// This function sets the rating and coloured stars based on the value of the image tag when  
// the mouse cursor hovers over the stars.
function changeStarRatingColour(num, classTarget) {
    switch (eval(num)) {
        case 1:
            document.querySelector(classTarget + "[value='1']").style.color = "#B76931";
            rating = 1;
            break;
        case 2:
            document.querySelector(classTarget + "[value='1']").style.color = "#B76931";
            document.querySelector(classTarget + "[value='2']").style.color = "#B76931";
            rating = 2;
            break;
        case 3:
            document.querySelector(classTarget + "[value='1']").style.color = "#B76931";
            document.querySelector(classTarget + "[value='2']").style.color = "#B76931";
            document.querySelector(classTarget + "[value='3']").style.color = "#B76931";
            rating = 3;
            break;
        case 4:
            document.querySelector(classTarget + "[value='1']").style.color = "#B76931";
            document.querySelector(classTarget + "[value='2']").style.color = "#B76931";
            document.querySelector(classTarget + "[value='3']").style.color = "#B76931";
            document.querySelector(classTarget + "[value='4']").style.color = "#B76931";
            rating = 4;
            break;
        case 5:
            document.querySelector(classTarget + "[value='1']").style.color = "#B76931";
            document.querySelector(classTarget + "[value='2']").style.color = "#B76931";
            document.querySelector(classTarget + "[value='3']").style.color = "#B76931";
            document.querySelector(classTarget + "[value='4']").style.color = "#B76931";
            document.querySelector(classTarget + "[value='5']").style.color = "#B76931";
            rating = 5;
            break;
    }
}

function editReview(element){
    var item = element.getAttribute("item");
    document.getElementById("editUserComments").value = review_array[item].comment
    console.log(review_array[item].userRating)
    displayColorStars('editUserRating', review_array[item].userRating);

}

//This function displayS the correct number of colored stars
//based on the restaurant rating that is given in the user review
function displayColorStars(classname, num) {
    var userRating = document.getElementsByClassName(classname);
    var classTarget = "." + classname;
    for (let rating of userRating) {
        rating.style.color = "#D6D6D6"
    }
    changeStarRatingColour(num, classTarget);
}

function updateReview() {
    document.getElementById
    var response = confirm("Are you sure you want to update this comment?");
    if (response == true) {
        console.log(review_array[currentIndex]._id)
        var editReviewURL = "/review/" + review_array[currentIndex]._id;
        review_array[currentIndex].comment = document.getElementById("editUserComments").value;
        review_array[currentIndex].userRating = rating;

        var updateReview = new XMLHttpRequest(); // new HttpRequest instance to send request to server
        updateReview.open("PUT", editReviewURL, true); //The HTTP method called 'PUT' is used here as we are updating data
        updateReview.setRequestHeader("Content-Type", "application/json");
        
        updateReview.onload = function () {
            getDetails();
            fetchComments();
            location.reload();
        };
        updateReview.send(JSON.stringify(review_array[currentIndex]));
    }
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
            sessionStorage.setItem("totalReviews", parseInt(totalReviews) -1)
            getDetails();
            fetchComments();
            location.reload();
        };
        eraseComment.send();
    }
}
