//Getting Elements and Buttons from HTML
const literPerHundredKmElement = document.getElementById("liter-per-hundred-km");
const distanceHolderElement = document.getElementById("distance-holder");
const priceHolderElement = document.getElementById("price-holder");
const convertBtn = document.getElementById("convert-button");
const infoPanelElement = document.getElementById("info-panel");

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
        localStorage.setItem("liter-per-hundred-Km", literPerHundredKmElement.value);
        localStorage.setItem("journey-distance", distanceHolderElement.value);
        localStorage.setItem("gas-price", priceHolderElement.value);

        //Sending user input to the fuel calculator
        let fuelConvertion = fuelCalculator(literPerHundredKmElement.value, distanceHolderElement.value, priceHolderElement.value);

        //Displaying calculation and changing the point notation
        infoPanelElement.textContent = "You´re " + `car takes ${fuelConvertion.forOnekm}l per km and it will use ${fuelConvertion.litersInTrip}liters the hole way, this means` + " your " + `car trip costs ${fuelConvertion.theTripPrice}€`;
        //If user hasent put in anything
    } else if (literPerHundredKmElement.value == 0) {
        infoPanelElement.textContent = "U have an electric or something?";
    //If user got the numbers to be minus
    } else if (parseInt(literPerHundredKmElement.value) < 0) {
        infoPanelElement.textContent = "Would it not be good with a car that gives u money insted";
    }
}); 

//Function for converting the fuel
function fuelCalculator(literPer100Km, distance, price) {
    //Creating object that will be sent later
    let fuelConvertion = {}

    //Doing the calcualtion for the fuel conversion
    oneKm = (literPer100Km / 100);
    totalLiters = (oneKm * distance);
    tripPrice = (totalLiters * price);

    //Putting the calculated values into the object to be sent back
    fuelConvertion = {
        forOnekm: oneKm.toFixed(3),
        litersInTrip: totalLiters.toFixed(2),
        theTripPrice: tripPrice.toFixed(2),
    }

    //Sending object with answers to convertions
    return fuelConvertion;
}

