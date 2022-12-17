// console.log("Hello");

//Create a variable to get the id #today
var todayDate = $("#today");

// console.log(todayDate);

//Create a variable that will create a "h2" element
var cityTitleEl = $("<h2>"+ "Today's Date" + "</h2>");


//Append h2 element to id #today

todayDate.append(cityTitleEl);