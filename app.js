const literPerHundredKmElement = document.getElementById("liter-per-hundred-km");
const distanceHolderElement = document.getElementById("distance-holder");
const priceHolderElement = document.getElementById("price-holder");
const convertBtn = document.getElementById("convert-button");
const infoPanelElement = document.getElementById("info-panel");

let oneKm;
let totalLiters;
let tripPrice;

convertBtn.addEventListener("click", () => {
    console.log()
    distanceHolderElement.value
    priceHolderElement.value

    if (literPerHundredKmElement.value > 0) {
        oneKm = (literPerHundredKmElement.value / 100).toFixed(2);
        totalLiters = (oneKm * distanceHolderElement.value).toFixed(2);
        tripPrice = (totalLiters * priceHolderElement.value).toFixed(2);
        
        infoPanelElement.textContent = "You´re " + `car takes ${oneKm}l per km and it will use ${totalLiters}liters the hole way, this means` + " you´re " + `car trip costs ${tripPrice}€`
    } else if (literPerHundredKmElement.value == 0) {
        infoPanelElement.textContent = "U have an electric or something?"
    } else if (parseInt(literPerHundredKmElement.value) < 0) {
        infoPanelElement.textContent = "Would it not be good with a car that gives u money insted"
    }
}); 