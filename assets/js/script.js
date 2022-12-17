//Variable containing today's date using moment.js
var todaysDate = moment();

// console.log(todaysDate);

//Variable to get the id #today
var todayEl = $("#today");

//Variable that will create a "h2" element with today's date using moment.js
var cityTitleEl = $("<h2>"+ "City " + "(" + todaysDate.format("D/MM/YYYY") + ") " + "</h2>");

//Append h2 element to id #today
todayEl.append(cityTitleEl);

