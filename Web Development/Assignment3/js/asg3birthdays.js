function birthday() {
  var person1name = document.getElementById('person1').value;
  var day1 = document.getElementById('person1Day').value;
  var month1 = document.getElementById('person1Month').value;
  var year1 = document.getElementById('person1Year').value;

  var person2name = document.getElementById('person2name').value;
  var day2 = document.getElementById('person2Day').value;
  var month2 = document.getElementById('person2Month').value;
  var year2 = document.getElementById('person2Year').value;
  var h = document.getElementById("output");
  h.innerHTML = person1name + "'s birthday is " + day1 + "/" + month1 + "/" + year1 + "<br />" + person2name + "'s birthday is " + day2 + "/" + month2 + "/" + year2 + "<br />";

  if (day1 == day2 && month1 == month2 && year1 == year2) {
    h.innerHTML = h.innerHTML + person1name + " and " + person2name + " have the same age!";
  } else if (year1 < year2) {
    h.innerHTML = h.innerHTML + person1name + " is older than " + person2name;
  } else if (year2 < year1) {
    h.innerHTML = h.innerHTML + person2name + " is older than " + person1name;
  } else if (year2 == year1) {
    if (month1 < month2) {
      h.innerHTML = h.innerHTML + person1name + " is older than " + person2name;
    } else if (month2 < month1) {
      h.innerHTML = h.innerHTML + person2name + " is older than " + person1name;
    } else if (month2 == month1) {
      if (day1 < day2) {
        h.innerHTML = h.innerHTML + person1name + " is older than " + person2name;
      } else {
        h.innerHTML = h.innerHTML + person2name + " is older than " + person1name;
      }
    }
  }
}


document.getElementById("birthdayButton").onclick = function click() {
  birthday();
}
