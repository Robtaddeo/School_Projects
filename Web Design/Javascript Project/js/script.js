// // Problem 1
//
// var num1 = 529;
// var num2 = 432;
//
// var string1 = "This is the first part of the string.";
// var string2 = " This is the second part of the string.";
//
// console.log(num1 + num2);
// console.log(string1 + string2);
//
// // Problem 2
//
// var rapperArray = [
//     ['Little Uzi','Travis Scott'],
//     ['Kanye','Drake'],
//     ['Chance the Rapper', 'Childish Gambino'],
//     ['Migos', 'Big Sean']
//   ];
//
// console.log(rapperArray[0][1]);
// console.log(rapperArray[1][1]);


// Create a conditional statement that can make a decision
// A comparison of two items
// a set of conditions that must be met

function fizzBuzz(){
  for (var i = 0; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0 ){
      console.log(i + ' FizzBuzz');
    }
    else if (i % 3 == 0) {
      console.log(i + " Fizz");
    }
    else if (i % 5 == 0) {
      console.log(i + " Buzz");
    }
    else {
      console.log(i);
    }
  }
}

fizzBuzz();
