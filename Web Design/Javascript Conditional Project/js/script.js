// Problem 1

var string1 = 'abcdefghijklmnopqrstuvwxyz';
var string2 = 'abcdefghijklmnopqrstuvwxyz';

if (string1 == string2){
  alert("Strings are equal!");
}
else {
  alert("Strings are not equal!");
}

// Problem 2

var num1 = 6;
var num2 = 10;

if (num1 == num2){
  alert("Numbers are equal!");
}
else if (num1 > num2) {
  alert("Number 1 is greater than Number 2!");
}
else {
  alert("Number 2 is greater than Number 1!");
}

// Problem 3

function stringCombine(string1, string2){
  console.log(string1 + string2);
}

stringCombine("The quick brown fox", " Jumped over the lazy dog.");

// Problem 4

function passwordChecker(){
  var password = prompt('Please enter your password');
  var actualPassword = 'ilovewebdesign';
  if (password == actualPassword){
    alert("Access Granted!");
  }
  else {
    alert("Invalid Password. Please try again.");
    passwordChecker();
  }
}

passwordChecker();
