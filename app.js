//Getting elements and buttons from HTML
const literPerHundredKmElement = document.getElementById("liter-per-hundred-km");
const distanceHolderElement = document.getElementById("distance-holder");
const priceHolderElement = document.getElementById("price-holder");
const convertBtn = document.getElementById("convert-button");
const infoPanelElement = document.getElementById("info-panel");

//Making variables for giving to user in the infopanel
let oneKm;
let totalLiters;
let tripPrice;

//Putting in user options from localstorage if they have been here before, otherwise it puts the value´s to 0
if(localStorage.getItem("liter-per-hundred-Km") != null || localStorage.getItem("journey-distance") != null || localStorage.getItem("gas-price") != null) {
    literPerHundredKmElement.value = localStorage.getItem("liter-per-hundred-Km");
    distanceHolderElement.value = localStorage.getItem("journey-distance");
    priceHolderElement.value = localStorage.getItem("gas-price");
} else {
    literPerHundredKmElement.value = 0;
    distanceHolderElement.value = 0;
    priceHolderElement.value = 0;
}

convertBtn.addEventListener("click", () => {
    if (literPerHundredKmElement.value > 0) {
        //Setting user options from fuel conversion to localstorage
        localStorage.setItem("liter-per-hundred-Km", literPerHundredKmElement.value)
        localStorage.setItem("journey-distance", distanceHolderElement.value)
        localStorage.setItem("gas-price", priceHolderElement.value)

        //Doing the calcualtion for the fuel conversion, also puting the point notation to 2
        oneKm = (literPerHundredKmElement.value / 100).toFixed(2);
        totalLiters = (oneKm * distanceHolderElement.value).toFixed(2);
        tripPrice = (totalLiters * priceHolderElement.value).toFixed(2);

        //Displaying calculation
        infoPanelElement.textContent = "You´re " + `car takes ${oneKm}l per km and it will use ${totalLiters}liters the hole way, this means` + " you´re " + `car trip costs ${tripPrice}€`
    //If user hasent put in anything
    } else if (literPerHundredKmElement.value == 0) {
        infoPanelElement.textContent = "U have an electric or something?"
    //If user got the numbers to be minus
    } else if (parseInt(literPerHundredKmElement.value) < 0) {
        infoPanelElement.textContent = "Would it not be good with a car that gives u money insted"
    }
}); 