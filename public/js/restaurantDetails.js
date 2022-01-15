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
    document.getElementById("website").textContent = website;
    document.getElementById("website").setAttribute('href', website)
    document.getElementById("picture").setAttribute('src', picture)
    //getStarRating();
    showDollarSigns();
}

const starTotal = 5;
// Get ratings
function getStarRating() {
    // Get percentage
    const starPercentage = ((averageRating) / starTotal) * 100;
    // Round to nearest 10
    const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
    console.log(starPercentageRounded)
    document.querySelector(`.${averageRating} .stars-inner`).style.width = starPercentageRounded;

}

function showDollarSigns(){
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
