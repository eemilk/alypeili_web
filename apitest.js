//This code is only for displaying openweather api values: current weather and 5 day forecast, to console

const key = "8827c126650cab89acad3db4b1e8917c";

const weather = {};
const KELVIN = 273;

weather.temperature = {
    unit : "celcius"
}

function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
    getForecast(latitude, longitude);
}

function getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            console.log(data);
        });
}

function getForecast(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}`;

    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            console.log(data);
        });
}

//Browser geolocation set
navigator.geolocation.getCurrentPosition(setPosition);

