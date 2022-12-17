//Variable containing today's date using moment.js
var todaysDate = moment();

// console.log(todaysDate);

//Variable to get the id #today
var todayEl = $("#today");

//Variable that will create a "h2" element with today's date using moment.js
var cityTitleEl = $("<h2>"+ "City " + "(" + todaysDate.format("D/MM/YYYY") + ") " + "</h2>");

//Append h2 element to id #today
todayEl.append(cityTitleEl);

//Variable to create a "h5" element that will hold the city temperature
var cityTemp = $("<h5>" + "Temp:" + "</h5>");

//Append cityTemp var to id #today
todayEl.append(cityTemp);


// var cityWindSpeed = "Wind:";
// var cityHumidity = "Humidity:";

console.log(cityTemp);
