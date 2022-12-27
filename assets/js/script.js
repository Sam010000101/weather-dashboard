//Variable containing today's date using moment.js
var todaysDate = moment();

// console.log(todaysDate);

//Variable to get the id #today
var todayEl = $("#today");

// //Variable to create a "h5" element that will hold the city temperature
// var cityTemp = $("<h5>" + "Temp: " + "</h5>");


// //Variable to create a "h5" element that will hold the city wind speed
// var cityWindSpeed = $("<h5>" + "Wind: " + "</h5>");

// //Append cityWindSpeed var to id #today
// todayEl.append(cityWindSpeed);

// //Variable to create a "h5" element that will hold the city humidity
// var cityHumidity = $("<h5>" + "Humidity: " + "</h5>");

// //Append cityHumidity var to id #today
// todayEl.append(cityHumidity);

// //Variables to hold geographical location
// var longitude = "44.1";
// var latitude = "44.1";
// var coordinates = "lat=" + latitude + "&" + "lon=" + longitude;

var city = "London";

//Variable to hold api query url
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=f51bb6b0db1117a9e5526eaa8621c68c";

//Perform an asynchronous HTTP (Ajax) request
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    // console.log(response);

    // console.log(response.main.temp);
    
// //logs the temperature of the first array item
// console.log(response.list[0].main.temp);
 
//Convert Kelvin to degrees c

// [insert code here]

//Append cityTemp var to id #today & add temperature data from OpenWeather API

$(todayEl).append("<h5>" + "Temp: " + response.main.temp + " \u00B0C" + "</h5>");
$(todayEl).append("<h5>" + "Wind Speed: " + response.wind.speed + " KPH" + "</h5>");
$(todayEl).append("<h5>" + "Humidity: " + response.main.humidity + "%" + "</h5>");


});

//Variable to get the id #today
var forecastOneEl = $("#five-day-one");
var forecastTwoEl = $("#five-day-two");
var forecastThreeEl = $("#five-day-three");
var forecastFourEl = $("#five-day-four");
var forecastFiveEl = $("#five-day-five");

//Variable to hold api query url
var queryURLForecast = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=f51bb6b0db1117a9e5526eaa8621c68c";
    // console.log(queryURLForecast);

//Perform an asynchronous HTTP (Ajax) request
$.ajax({
    url: queryURLForecast,
    method: "GET"
  }).then(function(response) {
// console.log(queryURLForecast);
    // console.log(response);

//Append cityTemp var to id #today & add temperature data from OpenWeather API
//first day forecast
$(forecastOneEl).append("<h5>" + moment().add(1, "day").format("D/MM/YYYY") + "</h5>");
$(forecastOneEl).append("<p>" + "Temp: " + response.list[5].main.temp + " \u00B0C" + "</p>");
$(forecastOneEl).append("<p>" + "Wind Speed: " + response.list[5].wind.speed + " KPH" + "</p>");
$(forecastOneEl).append("<p>" + "Humidity: " + response.list[5].main.humidity + "%" + "</p>");
// //log the JSON time stamp to check the correct weather data is being called
// console.log(response.list[1].dt_txt);

//second day forecast
$(forecastTwoEl).append("<h5>" + moment().add(2, "day").format("D/MM/YYYY") + "</h5>");
$(forecastTwoEl).append("<p>" + "Temp: " + response.list[13].main.temp + " \u00B0C" + "</p>");
$(forecastTwoEl).append("<p>" + "Wind Speed: " + response.list[13].wind.speed + " KPH" + "</p>");
$(forecastTwoEl).append("<p>" + "Humidity: " + response.list[13].main.humidity + "%" + "</p>");
// //log the JSON time stamp to check the correct weather data is being called
// console.log(response.list[9].dt_txt);

//third day forecast
$(forecastThreeEl).append("<h5>" + moment().add(3, "day").format("D/MM/YYYY") + "</h5>");
$(forecastThreeEl).append("<p>" + "Temp: " + response.list[21].main.temp + " \u00B0C" + "</p>");
$(forecastThreeEl).append("<p>" + "Wind Speed: " + response.list[21].wind.speed + " KPH" + "</p>");
$(forecastThreeEl).append("<p>" + "Humidity: " + response.list[21].main.humidity + "%" + "</p>");
// //log the JSON time stamp to check the correct weather data is being called
// console.log(response.list[17].dt_txt);

//fourth day forecast
$(forecastFourEl).append("<h5>" + moment().add(4, "day").format("D/MM/YYYY") + "</h5>");
$(forecastFourEl).append("<p>" + "Temp: " + response.list[29].main.temp + " \u00B0C" + "</p>");
$(forecastFourEl).append("<p>" + "Wind Speed: " + response.list[29].wind.speed + " KPH" + "</p>");
$(forecastFourEl).append("<p>" + "Humidity: " + response.list[29].main.humidity + "%" + "</p>");
// //log the JSON time stamp to check the correct weather data is being called
// console.log(response.list[25].dt_txt);

//fifth day forecast
insertIcon();
$(forecastFiveEl).append("<p>" + "Temp: " + response.list[37].main.temp + " \u00B0C" + "</p>");
$(forecastFiveEl).append("<p>" + "Wind Speed: " + response.list[37].wind.speed + " KPH" + "</p>");
$(forecastFiveEl).append("<p>" + "Humidity: " + response.list[37].main.humidity + "%" + "</p>");
// //log the JSON time stamp to check the correct weather data is being called
// console.log(response.list[33].dt_txt);
// console.log(response.list[33].weather[0].icon);

// Add relevant weather icons to columns
// ----------------------------------

//Variable to hold relevant weather icon
var weatherIconGrab = response.list[37].weather[0].icon + "@2x.png";
// console.log(weatherIconGrab);

//Variable to hold api query url
var queryURLIcons = "http://openweathermap.org/img/wn/" + weatherIconGrab;

//Inject correct weather icon code into queryURLIcons for corresponding date 


//Perform an asynchronous HTTP (Ajax) request to get weather icon
function insertIcon() {
$.ajax({
    url: queryURLIcons,
    method: "GET"
  }).then(function(response) {
    // console.log(response);

//Add weather icon image to fifth forecast column
var imgEl = document.createElement("img");
imgEl.setAttribute("id", "weatherIconFive");
imgEl.setAttribute("src", queryURLIcons);
imgEl.setAttribute("style", "width:50%; margin-left:auto; margin-right:auto;");
    $(forecastFiveEl).prepend(imgEl);

//Insert fifth day forecast date before the weather icon    
$("<h5>" + moment().add(5, "day").format("D/MM/YYYY") + "</h5>").insertBefore(weatherIconFive);

console.log(queryURLIcons);

});
}



});




//Prevent default on Search input (Form Elements)//
//--------------------------------//
//Variables that target the search form & search input using the respective ids
var formEl = $("#search-form");
var citySearch = $("#search-input");

function handleFormSubmit(event) {
    

    //prevent the default behavior
    event.preventDefault();

    // console.log(citySearch.val());

    //Variable to store searched city & today's date
    var cityTitleEl = $("<h2>"+ "<strong>" + (citySearch.val()) + " " + "(" + todaysDate.format("D/MM/YYYY") + ") " + "</strong>" + "</h2>");
    
    //Prepend city title element to <h2> tag in id #today, before today's date
    $(todayEl).prepend(cityTitleEl) + "(" + todaysDate.format("D/MM/YYYY") + ")";

    //Replace default button text with searched city
    var historyButtonOne = $("#historyButton-1");
    var historyButtonTwo = $("#historyButton-2");
    var historyButtonThree = $("#historyButton-3");
    var historyButtonFour = $("#historyButton-4");
    var historyButtonFive = $("#historyButton-5");
    var historyButtonSix = $("#historyButton-6");

    historyButtonOne.html("<p>" + (citySearch.val()) + "</p>");
    historyButtonTwo.html("<p>" + (citySearch.val()) + "</p>");
    historyButtonThree.html("<p>" + (citySearch.val()) + "</p>");
    historyButtonFour.html("<p>" + (citySearch.val()) + "</p>");
    historyButtonFive.html("<p>" + (citySearch.val()) + "</p>");
    historyButtonSix.html("<p>" + (citySearch.val()) + "</p>");
    
    //Stops the prepends from 'stacking up' when the search button is clicked multiple times
   $(this).off (event);

    //Clear input fields
    $('input[type="text"]').val("");
    
}

//Submit event on the form
formEl.on("submit", handleFormSubmit);



