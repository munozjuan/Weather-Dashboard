// Global variable
var cityList = [];
var cityname;

// localstorage 
initCityList();
initWeather();


// Function displays city entered by the user into the DOM
function renderCities(){
    $("#cityList").empty();
    $("#cityInput").val("");
    
    for (i=0; i<cityList.length; i++){
        var a = $("<a>");
        a.addClass("list-group-item list-group-item-action list-group-item-primary city");
        a.attr("data-name", cityList[i]);
        a.text(cityList[i]);
        $("#cityList").prepend(a);
    } 
}

// Function pulls the city list array from localstorage / clears storage
function initCityList() {
    var storedCities = JSON.parse(localStorage.getItem("cities"));
    
    if (storedCities !== null) {
        cityList = storedCities;
    }
    
    renderCities();
    localStorage.clear();
    }

// Function pull the current city into localstorage to display the current weather forecast on reload
function initWeather() {
    var storedWeather = JSON.parse(localStorage.getItem("currentCity"));

    if (storedWeather !== null) {
        cityname = storedWeather;

        displayWeather();
        displayFiveDayForecast();
    }
}

// Function saves the city array to localstorage
function storeCityArray() {
    localStorage.setItem("cities", JSON.stringify(cityList));
    }

// function saves currently display city to localstorage
function storeCurrentCity() {

    localStorage.setItem("currentCity", JSON.stringify(cityname));
}