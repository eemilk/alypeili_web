const tempElement = document.querySelector(".temperature-value p");
const locationElement = document.querySelector(".location p");
const iconElement = document.querySelector(".weather-icon");
const descElement = document.querySelector(".temperature-description p");

const foreTempElement = document.querySelector(".fore-temperature-value p");
const foreIconElement = document.querySelector(".fore-weather-icon");


// APP CONSTANTS AND VARS
const KELVIN = 273;
//API KEY
const key = "8827c126650cab89acad3db4b1e8917c";

const weather = {};

const forecast = {};

weather.temperature = {
    unit : "celcius"
}


//Check if browser supports geolocation
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notificationElement.style.display = "block";
    console.log("Error. Cant access location.");
}

// SET USERS POSITION
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
    getForecast(latitude, longitude);
}

//SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
function showError(error){
    notificationElement.style.display = "block";
    console.log("Error. Cant access location.");
}

// GET WEATHER FROM API PROVIDER
function getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name.toLowerCase();
            weather.country = data.sys.country.toLowerCase();
        })
        .then(function(){
            displayWeather();
        });
}

//GET 5 DAY / 3 HOUR FORECAST FROM API
function getForecast(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}`;

    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){       
            forecast.temperature.value = Math.floor(list[0].main.temp - KELVIN);
            forecast.iconId = list[0].weather[0].icon;
            
        })
        .then(function(){
            displayForecast();
        });
}

// DISPLAY WEATHER TO UI
function displayWeather(){
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>c</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}

// DISPLAY FORECAST TO UI
function displayForecast(){
    foreTempElement.innerHTML = `${forecast.temperature.value}°<span>c</span>`;
    foreIconElement.innerHTML = `<img src="icons/${forecast.iconId}.png"/>`;

}

// TIME AND DATE SETUP
function updateClock() {

    var today = new Date();
    var date = today.getFullYear() + '|' + (today.getMonth() + 1) + '|' + today.getDate();
    var time = today.getHours() + "|" + today.getMinutes();
    var dateTime = date + ' ' + time;
    document.getElementById('date').innerHTML = date;
    document.getElementById('time').innerHTML = time;

    setTimeout(updateClock, 1000);
}
updateClock();

