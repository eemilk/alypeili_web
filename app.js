//Current weather display css setup
const tempElement = document.querySelector(".temperature-value p");
const locationElement = document.querySelector(".location p");
const iconElement = document.querySelector(".weather-icon");
const descElement = document.querySelector(".temperature-description p");

//Forecast display css setup
const foreTempElement1 = document.querySelector(".fore-temperature-value1 p");
const foreIconElement1 = document.querySelector(".fore-weather-icon1");
const foreTempElement2 = document.querySelector(".fore-temperature-value2 p");
const foreIconElement2 = document.querySelector(".fore-weather-icon2");
const foreTempElement3 = document.querySelector(".fore-temperature-value3 p");
const foreIconElement3 = document.querySelector(".fore-weather-icon3");
const foreTempElement4 = document.querySelector(".fore-temperature-value4 p");
const foreIconElement4 = document.querySelector(".fore-weather-icon4");
const foreTempElement5 = document.querySelector(".fore-temperature-value5 p");
const foreIconElement5 = document.querySelector(".fore-weather-icon5");



// APP CONSTANTS AND VARS
const KELVIN = 273;
//API KEY
const key = "8827c126650cab89acad3db4b1e8917c";

const weather = {};

const forecast1 = {};
const forecast2 = {};
const forecast3 = {};
const forecast4 = {};
const forecast5 = {};

forecast1.temperature = {
    unit : "celcius"
}
forecast2.temperature = {
    unit : "celcius"
}
forecast3.temperature = {
    unit : "celcius"
}
forecast4.temperature = {
    unit : "celcius"
}
forecast5.temperature = {
    unit : "celcius"
}
weather.temperature = {
    unit : "celcius"
}


//Check if browser supports geolocation
/********                               This feature is now disabled when using static location data
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notificationElement.style.display = "block";
    console.log("Error. Cant access location.");
}*/

// SET USERS POSITION
function setPosition(){
    let latitude = 65;                  //Using static location data now so theres no parameters
    let longitude = 25.5;               //Using static location data now so theres no parameters

    getWeather(latitude, longitude);
    getForecast(latitude, longitude);
}
setPosition();

//SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
/********   This feature is now disabled when using static location data
function showError(error){
    notificationElement.style.display = "block";
    console.log("Error. Cant access location.");
}*/

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

//GET 5DAY 3HOUR FORECAST FROM API
function getForecast(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}`;

    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
                forecast1.temperature.value = Math.floor(data.list[7].main.temp - KELVIN);
                forecast1.iconId = data.list[7].weather[0].icon;
                
                forecast2.temperature.value = Math.floor(data.list[15].main.temp - KELVIN);
                forecast2.iconId = data.list[15].weather[0].icon;     

                forecast3.temperature.value = Math.floor(data.list[23].main.temp - KELVIN);
                forecast3.iconId = data.list[23].weather[0].icon;     

                forecast4.temperature.value = Math.floor(data.list[31].main.temp - KELVIN);
                forecast4.iconId = data.list[31].weather[0].icon;     

                forecast5.temperature.value = Math.floor(data.list[39].main.temp - KELVIN);
                forecast5.iconId = data.list[39].weather[0].icon;     
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
    foreTempElement1.innerHTML = `${forecast1.temperature.value}°<span>c</span>`;
    foreIconElement1.innerHTML = `<img src="icons/${forecast1.iconId}.png"/>`;

    foreTempElement2.innerHTML = `${forecast2.temperature.value}°<span>c</span>`;
    foreIconElement2.innerHTML = `<img src="icons/${forecast2.iconId}.png"/>`;

    foreTempElement3.innerHTML = `${forecast3.temperature.value}°<span>c</span>`;
    foreIconElement3.innerHTML = `<img src="icons/${forecast3.iconId}.png"/>`;

    foreTempElement4.innerHTML = `${forecast4.temperature.value}°<span>c</span>`;
    foreIconElement4.innerHTML = `<img src="icons/${forecast4.iconId}.png"/>`;

    foreTempElement5.innerHTML = `${forecast5.temperature.value}°<span>c</span>`;
    foreIconElement5.innerHTML = `<img src="icons/${forecast5.iconId}.png"/>`;
}

// TIME AND DATE SETUP
function updateClock() {

    var today = new Date();
    var date =  today.getDate() + '|' + (today.getMonth() + 1) + '|' + today.getFullYear();
    var time = today.getHours() + "|" + today.getMinutes();
    var dateTime = date + ' ' + time;
    document.getElementById('date').innerHTML = date;
    document.getElementById('time').innerHTML = time;

    //current weekday display
    var weekday = new Array(7);
    weekday[0] = "sunday";
    weekday[1] = "monday";
    weekday[2] = "tuesday";
    weekday[3] = "wednesday";
    weekday[4] = "thursday";
    weekday[5] = "friday";
    weekday[6] = "saturday";
    var currentWeekday = weekday[today.getDay()];
    document.getElementById('currentWeekday').innerHTML = currentWeekday;

    //Forecast weekdays display and logic
    var foreday = new Array(12);
    foreday[0] = "sun";
    foreday[1] = "mon";
    foreday[2] = "tue";
    foreday[3] = "wed";
    foreday[4] = "thu";
    foreday[5] = "fri";
    foreday[6] = "sat";
    foreday[7] = "sun";
    foreday[8] = "mon";
    foreday[9] = "tue";
    foreday[10] = "wed";
    foreday[11] = "thu";

    var foreday1 = foreday[today.getDay() + 1];
    var foreday2 = foreday[today.getDay() + 2];
    var foreday3 = foreday[today.getDay() + 3];
    var foreday4 = foreday[today.getDay() + 4];
    var foreday5 = foreday[today.getDay() + 5];

    document.getElementById('foreday1').innerHTML = foreday1;
    document.getElementById('foreday2').innerHTML = foreday2;
    document.getElementById('foreday3').innerHTML = foreday3;
    document.getElementById('foreday4').innerHTML = foreday4;
    document.getElementById('foreday5').innerHTML = foreday5;

    setTimeout(updateClock, 1000);
}

updateClock();