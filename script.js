// Welcome message
console.log("Welcome to Explore Karnataka!");

// Smooth scrolling
document.querySelectorAll('.nav-links a, .explore-btn')
.forEach(link => {
    link.addEventListener('click', function(event) {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Welcome popup
window.addEventListener('load', function() {
    console.log("Explore the beauty of Karnataka!");
});


// Search Destinations

function searchDestinations() {
    let input = document.getElementById("searchPlace").value.toLowerCase();

    let cards = document.querySelectorAll(".destination-card");

    cards.forEach(function(card) {
        let place = card.querySelector("h3").innerText.toLowerCase();

        if (place.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
// Filter Destinations
function filterPlaces(category) {
    let cards = document.querySelectorAll(".destination-card");

    cards.forEach(function(card) {
        if (category === "all" ||
            card.dataset.category === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });

    document.getElementById("searchPlace").value = "";
}
// District-wise Destination Filter
function filterByDistrict() {
    let district = document.getElementById("districtSelect").value;
    let cards = document.querySelectorAll(".destination-card");

    cards.forEach(function(card) {
        if (district === "all" || card.dataset.district === district) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });

    document.getElementById("searchPlace").value = "";
}
// Favourite Places
function toggleFavorite(button) {
    if (button.innerText.includes("Add to Favourites")) {
        button.innerText = "♥ Added to Favourites";
        button.style.backgroundColor = "green";
    } else {
        button.innerText = "♡ Add to Favourites";
        button.style.backgroundColor = "";
    }
}
// Random Destination Generator
function randomDestination() {
    let places = ["Hampi", "Coorg", "Chikmagalur"];
    let random = Math.floor(Math.random() * places.length);

    document.getElementById("randomResult").innerText =
        "You can visit: " + places[random];
}
// Travel Budget Calculator
function calculateBudget() {
    let travelers = Number(document.getElementById("travelers").value);
    let days = Number(document.getElementById("days").value);
    let dailyCost = Number(document.getElementById("dailyCost").value);

    if (travelers <= 0 || days <= 0 || dailyCost <= 0) {
        document.getElementById("budgetResult").innerText =
            "Please enter valid details.";
    } else {
        let total = travelers * days * dailyCost;
        document.getElementById("budgetResult").innerText =
            "Estimated Total Budget: ₹" + total;
    }
}
// Gallery image click
// Interactive Image Gallery
document.querySelectorAll('.gallery-container img')
.forEach(image => {
    image.addEventListener('click', function() {
        let newWindow = window.open("");
        newWindow.document.write(
            '<img src="' + this.src + '" style="width:100%; height:auto;">'
        );
    });
});