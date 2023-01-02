//Variable that targets search form by id
var formEl = $("#search-form");

//Variable that targets search input by id
var citySearch = $("#search-input");

//Function that submits the city search & returns all chosen forecast data for said city
function handleFormSubmit(event) {
  //Prevents the default behavior
  event.preventDefault();
  // console.log(event);
  //Variable that holds the city search form input
  var city = (citySearch.val());

  //Variable that holds today's date using moment.js
  var todaysDate = moment();
  // console.log(todaysDate);

  //Variable that targets #today id
  var todayEl = $("#today");

  //Variable that holds the API query url to get the JSON for the current weather in the searched city
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=f51bb6b0db1117a9e5526eaa8621c68c";
  // console.log(queryURL);

  //get JSON for searched/stored city
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    // console.log(response);
    // console.log(response.main.temp);
    // //logs the temperature of the first array item
    // console.log(response.list[0].main.temp);

    //Convert Kelvin to degrees c
    var tempConversionCurrent = (response.main.temp - 273.15).toFixed(2);
    // console.log(tempConversion);

    //Get api response for Temp & append to id #today
    $(todayEl).append("<h5>" + "Temp: " + tempConversionCurrent + " \u00B0C" + "</h5>");
    //Get api response for Wind Speed & append to id #today
    $(todayEl).append("<h5>" + "Wind Speed: " + response.wind.speed + " KPH" + "</h5>");
    //Get api response for Humidity & append to id #today
    $(todayEl).append("<h5>" + "Humidity: " + response.main.humidity + "%" + "</h5>");
  });

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    // console.log(response);

    //Variable that holds API query response that targets the correct weather iron code for the current weather in the searched city
    var todayWeatherIconCode = response.weather[0].icon + "@2x.png";
    // console.log(todayWeatherIconCode);

    //Variable that holds the API query url to get the JSON for the weather icon for the searched city's current weather
    var queryURLIconToday = "https://openweathermap.org/img/wn/" + todayWeatherIconCode;
    // console.log(response);
    $.ajax({
      url: queryURLIconToday,
      method: "GET"
    }).then(function (response) {
      // console.log(response);

    });

    //Variable to store searched city & today's date
    var cityTitleEl = $("<h2>" + "<strong>" + (citySearch.val()) + " " + "(" + todaysDate.format("D/MM/YYYY") + ") " + "</strong>" + "</h2>");
    cityTitleEl.attr('id', 'todayCityDate');
    cityTitleEl.attr('style', 'margin-top:-15px; margin-bottom:0;');

    //Prepend city title element to <h2> tag in id #today, before today's date
    $(todayEl).prepend(cityTitleEl) + "(" + todaysDate.format("D/MM/YYYY") + ")";

    //Variable to store today's weather icon
    var todaysWeatherIcon = $('<img>');
    // todaysWeatherIcon.attr('id', 'todaysWeatherIcon')
    todaysWeatherIcon.attr('src', queryURLIconToday);
    // todaysWeatherIcon.attr("style", "width:50%; margin-left:auto; margin-right:auto;")
    todaysWeatherIcon.attr("style", "display:inline; height:5rem;");
    todaysWeatherIcon.appendTo('#todayCityDate');

    //   // Local storage - Current Weather
    // ---------------------------------------
    localStorage.setItem('todayWeather', todayWeatherEl.innerHTML);


    // // Local storage for the search city
    // var cityChosen = document.querySelector('#search-input');

    // renderLastRegistered();

    // function renderLastRegistered() {
    //   var searchedCity = localStorage.getItem('search-input');

    //   cityChosen.textContent = searchedcity

    //   localStorage.setItem('city', $('#search-input').val());
    // }

    // The 5-Day forecast columns
    // -------------------------------------------------------------------------------

    //Variables that target the id's for five day forecast columns
    var forecastOneEl = $("#five-day-one");
    var forecastTwoEl = $("#five-day-two");
    var forecastThreeEl = $("#five-day-three");
    var forecastFourEl = $("#five-day-four");
    var forecastFiveEl = $("#five-day-five");

    //Variable that holds the API query url to get the JSON for the five day forcast
    var queryURLForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=f51bb6b0db1117a9e5526eaa8621c68c";
    // console.log(queryURLForecast);

    //Perform an asynchronous HTTP (Ajax) request to get JSON for five day forecast, for the searched city
    $.ajax({
      url: queryURLForecast,
      method: "GET"
    }).then(function (response) {
      // console.log(queryURLForecast);
      // console.log(response);

      //first day forecast
      // -----------------

      //Convert Kelvin to degrees c
      var tempConversionDayOne = (response.list[5].main.temp - 273.15).toFixed(2);

      // Get api response for temperature & append as a paragraph to id #five-day-one
      $(forecastOneEl).append("<p>" + "Temp: " + tempConversionDayOne + " \u00B0C" + "</p>");
      // Get api response for wind speed & append as a paragraph to id #five-day-one
      $(forecastOneEl).append("<p>" + "Wind Speed: " + response.list[5].wind.speed + " KPH" + "</p>");
      // Get api response for humidity & append as a paragraph to id #five-day-one
      $(forecastOneEl).append("<p>" + "Humidity: " + response.list[5].main.humidity + "%" + "</p>");
      // //log the JSON time stamp to check the correct weather data is being called
      // console.log(response.list[1].dt_txt);





      //second day forecast
      // -----------------

      //Convert Kelvin to degrees c
      var tempConversionDayTwo = (response.list[13].main.temp - 273.15).toFixed(2);

      // Get api response for temperature & append as a paragraph to id #five-day-two
      $(forecastTwoEl).append("<p>" + "Temp: " + tempConversionDayTwo + " \u00B0C" + "</p>");
      // Get api response for wind speed & append as a paragraph to id #five-day-two
      $(forecastTwoEl).append("<p>" + "Wind Speed: " + response.list[13].wind.speed + " KPH" + "</p>");
      // Get api response for humidity & append as a paragraph to id #five-day-two
      $(forecastTwoEl).append("<p>" + "Humidity: " + response.list[13].main.humidity + "%" + "</p>");
      // //log the JSON time stamp to check the correct weather data is being called
      // console.log(response.list[9].dt_txt);

      //third day forecast
      // -----------------

      //Convert Kelvin to degrees c
      var tempConversionDayThree = (response.list[21].main.temp - 273.15).toFixed(2);

      // Get api response for temperature & append as a paragraph to id #five-day-three
      $(forecastThreeEl).append("<p>" + "Temp: " + tempConversionDayThree + " \u00B0C" + "</p>");
      // Get api response for wind speed & append as a paragraph to id #five-day-three
      $(forecastThreeEl).append("<p>" + "Wind Speed: " + response.list[21].wind.speed + " KPH" + "</p>");
      // Get api response for humidity & append as a paragraph to id #five-day-three
      $(forecastThreeEl).append("<p>" + "Humidity: " + response.list[21].main.humidity + "%" + "</p>");
      // //log the JSON time stamp to check the correct weather data is being called
      // console.log(response.list[17].dt_txt);

      //fourth day forecast
      // -----------------

      //Convert Kelvin to degrees c
      var tempConversionDayFour = (response.list[29].main.temp - 273.15).toFixed(2);

      // Get api response for temperature & append as a paragraph to id #five-day-four
      $(forecastFourEl).append("<p>" + "Temp: " + tempConversionDayFour + " \u00B0C" + "</p>");
      // Get api response for wind speed & append as a paragraph to id #five-day-four
      $(forecastFourEl).append("<p>" + "Wind Speed: " + response.list[29].wind.speed + " KPH" + "</p>");
      // Get api response for humidity & append as a paragraph to id #five-day-four
      $(forecastFourEl).append("<p>" + "Humidity: " + response.list[29].main.humidity + "%" + "</p>");
      // //log the JSON time stamp to check the correct weather data is being called
      // console.log(response.list[25].dt_txt);

      //fifth day forecast
      // -----------------


      //Convert Kelvin to degrees c
      var tempConversionDayFive = (response.list[37].main.temp - 273.15).toFixed(2);

      // Get api response for temperature & append as a paragraph to id #five-day-five
      $(forecastFiveEl).append("<p>" + "Temp: " + tempConversionDayFive + " \u00B0C" + "</p>");
      // Get api response for wind speed & append as a paragraph to id #five-day-five
      $(forecastFiveEl).append("<p>" + "Wind Speed: " + response.list[37].wind.speed + " KPH" + "</p>");
      // Get api response for humidity & append as a paragraph to id #five-day-five
      $(forecastFiveEl).append("<p>" + "Humidity: " + response.list[37].main.humidity + "%" + "</p>");
      // //log the JSON time stamp to check the correct weather data is being called
      // console.log(response.list[33].dt_txt);
      // console.log(response.list[33].weather[0].icon);




      // Add relevant weather icons to five day forecast columns
      // -------------------------------------------------------

      //Variables that hold JSON weather icon code for the respective day of weather
      var weatherIconGrabOne = response.list[5].weather[0].icon + "@2x.png";
      var weatherIconGrabTwo = response.list[13].weather[0].icon + "@2x.png";
      var weatherIconGrabThree = response.list[21].weather[0].icon + "@2x.png";
      var weatherIconGrabFour = response.list[29].weather[0].icon + "@2x.png";
      var weatherIconGrabFive = response.list[37].weather[0].icon + "@2x.png";
      // console.log(weatherIconGrabOne);

      //Variables that hold the API query urls to get the JSON for the weather icons for the five day forcast
      var queryURLIconOne = "https://openweathermap.org/img/wn/" + weatherIconGrabOne;
      var queryURLIconTwo = "https://openweathermap.org/img/wn/" + weatherIconGrabTwo;
      var queryURLIconThree = "https://openweathermap.org/img/wn/" + weatherIconGrabThree;
      var queryURLIconFour = "https://openweathermap.org/img/wn/" + weatherIconGrabFour;
      var queryURLIconFive = "https://openweathermap.org/img/wn/" + weatherIconGrabFive;

      //Perform an asynchronous HTTP (Ajax) request to get weather icon for the first day of five days of forecasts
      $.ajax({
        url: queryURLIconOne,
        method: "GET"
      }).then(function (response) {
        // console.log(response);

      });

      //Add weather icon image to first forecast column
      var imgEl = document.createElement("img");
      imgEl.setAttribute("id", "weatherIconOne");
      imgEl.setAttribute("src", queryURLIconOne);
      imgEl.setAttribute("style", "width:50%; margin-left:-1rem;");
      $(forecastOneEl).prepend(imgEl);

      //Take the current date & add 1 day, then insert before the weather icon for the first day of five days of forecasts   
      $("<h5>" + moment().add(1, "day").format("D/MM/YYYY") + "</h5>").insertBefore(weatherIconOne);
      $("#five-day-one").attr("style", "padding-top:0.5rem;");

      //Perform an asynchronous HTTP (Ajax) request to get weather icon for the second day of five days of forecasts
      $.ajax({
        url: queryURLIconTwo,
        method: "GET"
      }).then(function (response) {
        // console.log(response);

      });

      //Add weather icon image to second forecast column
      var imgEl = document.createElement("img");
      imgEl.setAttribute("id", "weatherIconTwo");
      imgEl.setAttribute("src", queryURLIconTwo);
      imgEl.setAttribute("style", "width:50%; margin-left:-1rem;");
      $(forecastTwoEl).prepend(imgEl);

      //Take the current date & add 2 days, then insert before the weather icon for the second day of five days of forecasts    
      $("<h5>" + moment().add(2, "day").format("D/MM/YYYY") + "</h5>").insertBefore(weatherIconTwo);
      $("#five-day-two").attr("style", "padding-top:0.5rem;");

      //Perform an asynchronous HTTP (Ajax) request to get weather icon for the third day of five days of forecasts
      $.ajax({
        url: queryURLIconThree,
        method: "GET"
      }).then(function (response) {
        // console.log(response);

      });

      //Add weather icon image to third forecast column
      var imgEl = document.createElement("img");
      imgEl.setAttribute("id", "weatherIconThree");
      imgEl.setAttribute("src", queryURLIconThree);
      imgEl.setAttribute("style", "width:50%; margin-left:-1rem;");
      $(forecastThreeEl).prepend(imgEl);

      //Take the current date & add 3 days, then insert before the weather icon for the third day of five days of forecasts    
      $("<h5>" + moment().add(3, "day").format("D/MM/YYYY") + "</h5>").insertBefore(weatherIconThree);
      $("#five-day-three").attr("style", "padding-top:0.5rem;");

      //Perform an asynchronous HTTP (Ajax) request to get weather icon for the fourth day of five days of forecasts
      $.ajax({
        url: queryURLIconFour,
        method: "GET"
      }).then(function (response) {
        // console.log(response);

      });

      //Add weather icon image to fourth forecast column
      var imgEl = document.createElement("img");
      imgEl.setAttribute("id", "weatherIconFour");
      imgEl.setAttribute("src", queryURLIconFour);
      imgEl.setAttribute("style", "width:50%; margin-left:-1rem;");
      $(forecastFourEl).prepend(imgEl);

      //Take the current date & add 4 days, then insert before the weather icon for the fourth day of five days of forecasts     
      $("<h5>" + moment().add(4, "day").format("D/MM/YYYY") + "</h5>").insertBefore(weatherIconFour);
      $("#five-day-four").attr("style", "padding-top:0.5rem;");

      //Perform an asynchronous HTTP (Ajax) request to get weather icon for the fifth day of five days of forecasts
      $.ajax({
        url: queryURLIconFive,
        method: "GET"
      }).then(function (response) {
        // console.log(response);

      });

      //Add weather icon image to fifth forecast column
      var imgEl = document.createElement("img");
      imgEl.setAttribute("id", "weatherIconFive");
      imgEl.setAttribute("src", queryURLIconFive);
      imgEl.setAttribute("style", "width:50%; margin-left:-1rem;");
      $(forecastFiveEl).prepend(imgEl);

      //Take the current date & add 5 days, then insert before the weather icon for the fifth day of five days of forecasts
      $("<h5>" + moment().add(5, "day").format("D/MM/YYYY") + "</h5>").insertBefore(weatherIconFive);
      $("#five-day-five").attr("style", "padding-top:0.5rem;");

      // Local storage - Five Day Forecast
      // ---------------------------------------
      localStorage.setItem('forecast', fiveDayEl.innerHTML);
    });


    // Dealing with the button storage
    // -------------------------------------

    //Replace default button text with searched city
    //Variables that target the history buttons
    var historyButtonOne = $("#historyButton-1");
    var historyButtonTwo = $("#historyButton-2");
    var historyButtonThree = $("#historyButton-3");
    var historyButtonFour = $("#historyButton-4");
    var historyButtonFive = $("#historyButton-5");
    var historyButtonSix = $("#historyButton-6");
  
  
    //Inserts the searched city into each button
    
    // if (localStorage.getItem("ButtonOne") == "")
    // historyButtonOne.html("<p>" + (citySearch.val()) + "</p>");
    // else localStorage.setItem('ButtonTwo', (citySearch.val()));  
    historyButtonOne.html("<p>" + (citySearch.val()) + "</p>");
    localStorage.setItem('ButtonOne', (citySearch.val()));
    historyButtonTwo.html("<p>" + (citySearch.val()) + "</p>");
    localStorage.setItem('ButtonTwo', (citySearch.val()));
    historyButtonThree.html("<p>" + (citySearch.val()) + "</p>");
    localStorage.setItem('ButtonThree', (citySearch.val()));
    historyButtonFour.html("<p>" + (citySearch.val()) + "</p>");
    localStorage.setItem('ButtonFour', (citySearch.val()));
    historyButtonFive.html("<p>" + (citySearch.val()) + "</p>");
    localStorage.setItem('ButtonFive', (citySearch.val()));
    historyButtonSix.html("<p>" + (citySearch.val()) + "</p>");
    localStorage.setItem('ButtonSix', (citySearch.val()));

// var searchHistory = [citySearch.val()]
// localStorage.setItem( )
// console.log(searchHistory);


// // Search History Function
// // -----------------------
//     //Enter first city search
//     citySearch.val()
  
//     //Add first city search to local storage 'ButtonOne'
//     buttonEl = ["ButtonOne", "ButtonTwo", "ButtonThree", "ButtonFour", "ButtonFive", "ButtonSix"];
//     // localStorage.setItem(buttonEl[i], (citySearch.val()));
//     console.log(buttonEl[i]);
    
//     i = 

//     //Recall 'ButtonOne' from local storage and asign to #historyButton-1
//     var buttonOneLocalStorage = localStorage.getItem('ButtonOne');
//     var buttonOneQuery = document.querySelector('#historyButton-1');
//     buttonOneQuery.innerHTML = buttonOneLocalStorage
    //Enter second city search

    //Add second city search to local storage 'ButtonTwo'

    //Recall 'ButtonTwo' from local storage and asign to #historyButton-2   

    //Enter third city search

    //Add third city search to local storage 'ButtonThree'

    //Recall 'ButtonThree' from local storage and asign to #historyButton-3
    
    //Enter fourth city search

    //Add fourth city search to local storage 'ButtonFour'

    //Recall 'ButtonFour' from local storage and asign to #historyButton-4

    //Enter fifth city search

    //Add fifth city search to local storage 'ButtonFive'

    //Recall 'ButtonFive' from local storage and asign to #historyButton-5   

    //Enter six city search

    //Add sixth city search to local storage 'ButtonSix'

    //Recall 'ButtonSix' from local storage and asign to #historyButton-6
    


    // Create an array with an index length of 5 that
    // Array fills up and then it's a one-in one-out procedure


    //Stops the prepends from 'stacking up' when the search button is clicked multiple times
    $(this).off(event);

    //Clears the input field
    $('input[type="text"]').val("");
  });
}

//Submit form & invoke the handleFormSubmit function
formEl.on("submit", handleFormSubmit);

//   // Local storage - Current Weather
// ---------------------------------------
var todayWeatherEl = document.querySelector("#today");
var grabber = localStorage.getItem('todayWeather');
// console.log(todayElTemp);
todayWeatherEl.innerHTML = grabber
// console.log(todayWeatherEl.innerHTML);
// console.log(grabber);
//   // Local storage - Five Day Forecast
// ---------------------------------------
// localStorage.setItem('forecast',fiveDayEl.innerHTML);
var fiveDayEl = document.querySelector("#five-day-forecast, #five-day-forecast-row");
var grabberTwo = localStorage.getItem('forecast');
var forecastTwo = document.querySelector("#five-day-forecast-storage");
// console.log(fiveDayEl.innerHTML);
// console.log(grabberTwo);

forecastTwo.innerHTML = grabberTwo

// Local storage recall - Button 1
var buttonOneLocalStorage = localStorage.getItem('ButtonOne');
var buttonOneQuery = document.querySelector('#historyButton-1');
buttonOneQuery.innerHTML = buttonOneLocalStorage

// Local storage recall - Button 2
var buttonTwoLocalStorage = localStorage.getItem('ButtonTwo');
var buttonTwoQuery = document.querySelector('#historyButton-2');
buttonTwoQuery.innerHTML = buttonTwoLocalStorage

// // Local storage recall - Button 3
// var buttonThreeLocalStorage = localStorage.getItem('ButtonThree');
// var buttonThreeQuery = document.querySelector('#historyButton-3');
// buttonThreeQuery.innerHTML = buttonThreeLocalStorage

// // Local storage recall - Button 4
// var buttonFourLocalStorage = localStorage.getItem('ButtonFour');
// var buttonFourQuery = document.querySelector('#historyButton-4');
// buttonFourQuery.innerHTML = buttonFourLocalStorage

// // Local storage recall - Button 5
// var buttonFiveLocalStorage = localStorage.getItem('ButtonFive');
// var buttonFiveQuery = document.querySelector('#historyButton-5');
// buttonFiveQuery.innerHTML = buttonFiveLocalStorage

// // Local storage recall - Button 6
// var buttonSixLocalStorage = localStorage.getItem('ButtonSix');
// var buttonSixQuery = document.querySelector('#historyButton-6');
// buttonSixQuery.innerHTML = buttonSixLocalStorage

  // Need to stop the searches from stacking up


//Add event listeners for the buttons








