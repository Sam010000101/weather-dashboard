//Variable containing today's date using moment.js
var todaysDate = moment();

// console.log(todaysDate);

//Variable to get the id #today
var todayEl = $("#today");

//Variable that will create a "h2" element with today's date using moment.js
var cityTitleEl = $("<h2>"+ "<strong>" + "City " + "(" + todaysDate.format("D/MM/YYYY") + ") " + "</strong>" + "</h2>");

//Append h2 element to id #today
todayEl.append(cityTitleEl);

//Variable to create a "h5" element that will hold the city temperature
var cityTemp = $("<h5>" + "Temp: " + "</h5>");

//Append cityTemp var to id #today
todayEl.append(cityTemp);

//Variable to create a "h5" element that will hold the city wind speed
var cityWindSpeed = $("<h5>" + "Wind: " + "</h5>");

//Append cityWindSpeed var to id #today
todayEl.append(cityWindSpeed);

//Variable to create a "h5" element that will hold the city humidity
var cityHumidity = $("<h5>" + "Humidity: " + "</h5>");

//Append cityHumidity var to id #today
todayEl.append(cityHumidity);


console.log(cityTemp);

//Variables to hold geographical location
var longitude = "44.1";
var latitude = "44.1";
var coordinates = "lat=" + latitude + "&" + "lon=" + longitude;


//Variable to hold api query url
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?" + coordinates + "&appid=f51bb6b0db1117a9e5526eaa8621c68c";

//Perform an asynchronous HTTP (Ajax) request
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
// console.log(coordinates);
  
});