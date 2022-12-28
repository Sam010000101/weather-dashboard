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

console.log(response);
var todayWeatherIconCode = response.weather[0].icon;
console.log(todayWeatherIconCode);

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
$(forecastOneEl).append("<p>" + "Temp: " + response.list[5].main.temp + " \u00B0C" + "</p>");
$(forecastOneEl).append("<p>" + "Wind Speed: " + response.list[5].wind.speed + " KPH" + "</p>");
$(forecastOneEl).append("<p>" + "Humidity: " + response.list[5].main.humidity + "%" + "</p>");
// //log the JSON time stamp to check the correct weather data is being called
// console.log(response.list[1].dt_txt);

//second day forecast
// $(forecastTwoEl).append("<h5>" + moment().add(2, "day").format("D/MM/YYYY") + "</h5>");
$(forecastTwoEl).append("<p>" + "Temp: " + response.list[13].main.temp + " \u00B0C" + "</p>");
$(forecastTwoEl).append("<p>" + "Wind Speed: " + response.list[13].wind.speed + " KPH" + "</p>");
$(forecastTwoEl).append("<p>" + "Humidity: " + response.list[13].main.humidity + "%" + "</p>");
// //log the JSON time stamp to check the correct weather data is being called
// console.log(response.list[9].dt_txt);

//third day forecast
// $(forecastThreeEl).append("<h5>" + moment().add(3, "day").format("D/MM/YYYY") + "</h5>");
$(forecastThreeEl).append("<p>" + "Temp: " + response.list[21].main.temp + " \u00B0C" + "</p>");
$(forecastThreeEl).append("<p>" + "Wind Speed: " + response.list[21].wind.speed + " KPH" + "</p>");
$(forecastThreeEl).append("<p>" + "Humidity: " + response.list[21].main.humidity + "%" + "</p>");
// //log the JSON time stamp to check the correct weather data is being called
// console.log(response.list[17].dt_txt);

//fourth day forecast
// $(forecastFourEl).append("<h5>" + moment().add(4, "day").format("D/MM/YYYY") + "</h5>");
$(forecastFourEl).append("<p>" + "Temp: " + response.list[29].main.temp + " \u00B0C" + "</p>");
$(forecastFourEl).append("<p>" + "Wind Speed: " + response.list[29].wind.speed + " KPH" + "</p>");
$(forecastFourEl).append("<p>" + "Humidity: " + response.list[29].main.humidity + "%" + "</p>");
// //log the JSON time stamp to check the correct weather data is being called
// console.log(response.list[25].dt_txt);

//fifth day forecast
$(forecastFiveEl).append("<p>" + "Temp: " + response.list[37].main.temp + " \u00B0C" + "</p>");
$(forecastFiveEl).append("<p>" + "Wind Speed: " + response.list[37].wind.speed + " KPH" + "</p>");
$(forecastFiveEl).append("<p>" + "Humidity: " + response.list[37].main.humidity + "%" + "</p>");
// //log the JSON time stamp to check the correct weather data is being called
// console.log(response.list[33].dt_txt);
// console.log(response.list[33].weather[0].icon);

// Add relevant weather icons to columns
// ----------------------------------

//Variable to hold relevant weather icon
var weatherIconGrabOne = response.list[5].weather[0].icon + "@2x.png";
var weatherIconGrabTwo = response.list[13].weather[0].icon + "@2x.png";
var weatherIconGrabThree = response.list[21].weather[0].icon + "@2x.png";
var weatherIconGrabFour = response.list[29].weather[0].icon + "@2x.png";
var weatherIconGrabFive = response.list[37].weather[0].icon + "@2x.png";
// console.log(weatherIconGrabOne);

//Variable to hold api query url
var queryURLIconOne = "http://openweathermap.org/img/wn/" + weatherIconGrabOne;
var queryURLIconTwo = "http://openweathermap.org/img/wn/" + weatherIconGrabTwo;
var queryURLIconThree = "http://openweathermap.org/img/wn/" + weatherIconGrabThree;
var queryURLIconFour = "http://openweathermap.org/img/wn/" + weatherIconGrabFour;
var queryURLIconFive = "http://openweathermap.org/img/wn/" + weatherIconGrabFive;

// Do we need a switch-case? to specify the conditions for the correct icon url?


//Inject correct weather icon code into queryURLIcons for corresponding date 


//Perform an asynchronous HTTP (Ajax) request to get weather icon

$.ajax({
    url: queryURLIconOne,
    method: "GET"
  }).then(function(response) {
    // console.log(response);

});

//Add weather icon image to first forecast column
var imgEl = document.createElement("img");
imgEl.setAttribute("id", "weatherIconOne");
imgEl.setAttribute("src", queryURLIconOne);
imgEl.setAttribute("style", "width:50%; margin-left:-1rem;");
    $(forecastOneEl).prepend(imgEl);

//Insert first day forecast date before the weather icon    
$("<h5>" + moment().add(1, "day").format("D/MM/YYYY") + "</h5>").insertBefore(weatherIconOne);
$("#five-day-one").attr("style", "padding-top:0.5rem;");

$.ajax({
    url: queryURLIconTwo,
    method: "GET"
  }).then(function(response) {
    // console.log(response);

});

//Add weather icon image to second forecast column
var imgEl = document.createElement("img");
imgEl.setAttribute("id", "weatherIconTwo");
imgEl.setAttribute("src", queryURLIconTwo);
imgEl.setAttribute("style", "width:50%; margin-left:-1rem;");
    $(forecastTwoEl).prepend(imgEl);

//Insert first day forecast date before the weather icon    
$("<h5>" + moment().add(2, "day").format("D/MM/YYYY") + "</h5>").insertBefore(weatherIconTwo);
$("#five-day-two").attr("style", "padding-top:0.5rem;");

$.ajax({
    url: queryURLIconThree,
    method: "GET"
  }).then(function(response) {
    // console.log(response);

});

//Add weather icon image to third forecast column
var imgEl = document.createElement("img");
imgEl.setAttribute("id", "weatherIconThree");
imgEl.setAttribute("src", queryURLIconThree);
imgEl.setAttribute("style", "width:50%; margin-left:-1rem;");
    $(forecastThreeEl).prepend(imgEl);

//Insert first day forecast date before the weather icon    
$("<h5>" + moment().add(3, "day").format("D/MM/YYYY") + "</h5>").insertBefore(weatherIconThree);
$("#five-day-three").attr("style", "padding-top:0.5rem;");

$.ajax({
    url: queryURLIconFour,
    method: "GET"
  }).then(function(response) {
    // console.log(response);

});

//Add weather icon image to fourth forecast column
var imgEl = document.createElement("img");
imgEl.setAttribute("id", "weatherIconFour");
imgEl.setAttribute("src", queryURLIconFour);
imgEl.setAttribute("style", "width:50%; margin-left:-1rem;");
    $(forecastFourEl).prepend(imgEl);

//Insert first day forecast date before the weather icon    
$("<h5>" + moment().add(4, "day").format("D/MM/YYYY") + "</h5>").insertBefore(weatherIconFour);
$("#five-day-four").attr("style", "padding-top:0.5rem;");

$.ajax({
    url: queryURLIconFive,
    method: "GET"
  }).then(function(response) {
    // console.log(response);

});

//Add weather icon image to fifth forecast column
var imgEl = document.createElement("img");
imgEl.setAttribute("id", "weatherIconFive");
imgEl.setAttribute("src", queryURLIconFive);
imgEl.setAttribute("style", "width:50%; margin-left:-1rem;");
    $(forecastFiveEl).prepend(imgEl);

//Insert first day forecast date before the weather icon    
$("<h5>" + moment().add(5, "day").format("D/MM/YYYY") + "</h5>").insertBefore(weatherIconFive);
$("#five-day-five").attr("style", "padding-top:0.5rem;");



//Prevent default on Search input (Form Elements)//
//--------------------------------//
//Variables that target the search form & search input using the respective ids
var formEl = $("#search-form");
var citySearch = $("#search-input");

function handleFormSubmit(event) {
    

    //prevent the default behavior
    event.preventDefault();

    // console.log(citySearch.val());

    queryURL
    
//Variable to hold relevant weather icon
// var weatherIconGrabToday = response.list[5].weather[0].icon + "@2x.png";

var city = "London";

//Variable to hold api query url
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=f51bb6b0db1117a9e5526eaa8621c68c";

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    // console.log(response);

    console.log(response);
var todayWeatherIconCode = response.weather[0].icon + "@2x.png";
console.log(todayWeatherIconCode);




//Variable to hold api query url
var queryURLIconToday = "http://openweathermap.org/img/wn/" + todayWeatherIconCode;
console.log(response);
    $.ajax({
        url: queryURLIconToday,
        method: "GET"
      }).then(function(response) {
        // console.log(response);
    
    });

    //Variable to store searched city & today's date
    var cityTitleEl = $("<h2>"+ "<strong>" + (citySearch.val()) + " " + "(" + todaysDate.format("D/MM/YYYY") + ") " + "</strong>" + "</h2>");
    cityTitleEl.attr('id', 'todayCityDate');
    cityTitleEl.attr('style', 'margin-top:-15px;');

    //Prepend city title element to <h2> tag in id #today, before today's date
    $(todayEl).prepend(cityTitleEl) + "(" + todaysDate.format("D/MM/YYYY") + ")";
    
    //Variable to store today's weather icon
    var todaysWeatherIcon = $('<img>');
    // todaysWeatherIcon.attr('id', 'todaysWeatherIcon')
    todaysWeatherIcon.attr('src', queryURLIconToday);
    // todaysWeatherIcon.attr("style", "width:50%; margin-left:auto; margin-right:auto;")
    todaysWeatherIcon.attr("style", "display:inline; height:5rem;");
    todaysWeatherIcon.appendTo('#todayCityDate');

    //Get today's weather icon

  

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
});
}
//Submit event on the form
formEl.on("submit", handleFormSubmit);

});












