var holidays = [
  ['2018-09-03', "Labor Day", "https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/189/2018/08/17113600/GettyImages-824290974.jpg"],
  ['2018-10-8', "Fall Recess", "https://s3.amazonaws.com/cordillera-network/wp-content/uploads/sites/4/2018/10/04050637/Indigenous-Peoples-Day.jpeg"],
  ['2018-11-21', "Thanksgiving Recess", "http://www.holidayscalendar.com/wp-content/uploads/2016/11/Thanksgiving_ss_559071220-790x400.jpg"],
  ['2018-11-22', "Thanksgiving Recess", "http://www.holidayscalendar.com/wp-content/uploads/2016/11/Thanksgiving_ss_559071220-790x400.jpg"],
  ['2018-11-23', "Thanksgiving Recess", "http://www.holidayscalendar.com/wp-content/uploads/2016/11/Thanksgiving_ss_559071220-790x400.jpg"],
  ['2018-12-22', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2018-12-23', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2018-12-24', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2018-12-25', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2018-12-26', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2018-12-27', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2018-12-28', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2018-12-29', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2018-12-30', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2018-12-31', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2019-01-01', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2019-01-02', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2019-01-03', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2019-01-04', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2019-01-05', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2019-01-06', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2019-01-07', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2019-01-08', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2019-01-09', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2019-01-10', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2019-01-11', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2019-01-12', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2019-01-13', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2019-01-14', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2019-01-15', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2019-01-16', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2019-01-17', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2019-01-18', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2019-01-19', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2019-01-20', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2019-01-21', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2019-01-22', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2019-01-23', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2019-01-24', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2019-01-25', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2019-01-26', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2019-01-27', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2019-01-28', "Winter Break", "https://i.ndtvimg.com/i/2015-12/christmas_650x400_71450865126.jpg"],
  ['2019-02-18', "Presidents Day", "http://www.holidayscalendar.com/wp-content/uploads/2016/12/Presidents-Day_ss_372436267-790x400.jpg"],
  ['2019-03-18', "Spring Break", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4QtU4ph9fUWWzVeEL457tlq9aXvWXgsc74b65dqzIWGp9cT_V"],
  ['2019-03-19', "Spring Break", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4QtU4ph9fUWWzVeEL457tlq9aXvWXgsc74b65dqzIWGp9cT_V"],
  ['2019-03-20', "Spring Break", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4QtU4ph9fUWWzVeEL457tlq9aXvWXgsc74b65dqzIWGp9cT_V"],
  ['2019-03-21', "Spring Break", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4QtU4ph9fUWWzVeEL457tlq9aXvWXgsc74b65dqzIWGp9cT_V"],
  ['2019-03-22', "Spring Break", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4QtU4ph9fUWWzVeEL457tlq9aXvWXgsc74b65dqzIWGp9cT_V"]
];

function holiday() {

  var inputDate = document.getElementById('date').value;
  var res = inputDate.split("-");
  yyyy = res[0];
  mm =  res[1];
  dd =  res[2];
  var date = yyyy + "-" + mm + "-" + dd;
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var month = months[mm-1];


  h1 = document.getElementById('holidayName');
  img = document.getElementById('holidayImg');

  var holiday = false;
  var i;

  for (i = 0; i < holidays.length; i++){
    if(holidays[i][0] == inputDate){
      h1.innerHTML = month + " " + dd + ", " + yyyy + " is " + holidays[i][1] + ". This is an NYU holiday.";
      img.src = holidays[i][2];
      break;
    }
    else if ((yyyy > 2019) || (yyyy < 2018) || (yyyy == 2018 && mm < 9) || (yyyy == 2019 && mm > 5) || inputDate == "") {
      h1.innerHTML = "Please enter a date within this school year";
      img.src = "";
      break;
    }
    else {
      h1.innerHTML = month + " " + dd + ", " + yyyy + " is not an NYU holiday";
      img.src = "";
    }
  }
}


window.onload = function() {
  document.getElementById("dateButton").onclick = function click() {
    holiday();
  }
}
