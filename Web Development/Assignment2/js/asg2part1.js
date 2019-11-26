// Prizes Array
var prizes = ["Television", "iPhone", "Xbox", "Macbook", "Trip to Jamaica"];

function random() {
  return Math.floor(5 * Math.random() + 1);
}

function rand7(){
  let num1 = random();
  let num2 = random();
  console.log(num1);
  console.log(num2);


  const randomInt = 5 * num1 + num2 - 5;
  console.log(randomInt);
    // if (randomInt > 22){
    //   rand7();
    //   console.log(randomInt);
    // }
    // else{
    //   return randomInt % 7;
    // }
  
}

rand7();

// Problem 1
function styleChange(){
  document.body.style.backgroundColor = "#2c3e50";
  document.body.style.fontFamily = "Dosis";
  document.body.style.color = "white";
  document.body.style.padding = "20px";
  document.getElementById('content').style.marginLeft = "auto";
  document.getElementById('content').style.marginRight = "auto";
  document.getElementById('Header').style.textAlign = "center";
  document.getElementById('Header').style.color = "white";
  document.getElementById('ClickMe').style.visibility = "hidden";

}

// Problem 2
function win(){
  var randomNum = Math.floor(Math.random() * 5);
  var p = document.getElementById("prizeP");
  p.innerHTML = "Congratulations! You won a: " + prizes[randomNum];
}

// Problem 2
function randArray(){
  var i = 0;
  while (i < prizes.length) {
    var ul = document.getElementById("prizeList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(prizes[i][0]));
    ul.appendChild(li);
  }
}

// Problem 3
function swapT(){
  p1 = document.getElementById('p1').innerHTML;
  p2 = document.getElementById('p2').innerHTML;
  document.getElementById('p1').innerHTML = p2;
  document.getElementById('p2').innerHTML = p1;
}

// Problem 4
function swapI(){
  var img1 = document.getElementById('img1').src;
  var img2 = document.getElementById('img2').src;
  document.getElementById('img1').src = img2;
  document.getElementById('img2').src = img1;
}

// Problem 5
function newDoc(){

  var img = document.getElementById('imgDetails');
  var imgSrc = img.src;
  var imgTitle = img.alt;
  var imgHeight = img.height;
  var imgWidth = img.width;

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();
  var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var day = weekday[today.getDay()];
  var fontStyle = "<link href='https://fonts.googleapis.com/css?family=Dosis' rel='stylesheet'>"

  h1 = "<h1>" + imgTitle + "</h1>";
  pInfo = "<p>The image's height is: " + imgHeight + "px and the image's width is: "  + imgWidth + "px</h1>";
  date = "<p>Todays Date is: " + dd + "/"  + mm + "/" + yyyy + " and today is a " + day + "</p>";
  newImg = "<img src='" + imgSrc + "' </img>"

  document.open();
  document.write("<!DOCTYPE html>" + "<head>" + fontStyle + "<link rel='stylesheet' type='text/css' href='css/style.css'>" + "<title>Image Details</title>" + '</head>' + '<body>' + h1 + newImg + pInfo + date + '</body>' + '</html>')
  document.close();
}

// Problem 6

function converter(){
  var inches = document.getElementById('inches').value;
  var cm = document.getElementById('cm');
  console.log("Yeet");
  cm.style.color = "red";
  cm.value = inches * 2.54;
}

window.onload = function() {
    randArray();
    document.getElementById("ClickMe").onclick = function click() {
      styleChange();
    }
    document.getElementById("prizeButton").onclick = function click() {
      win();
    }
    document.getElementById("p1").onclick = function click() {
      swapT();
    }
    document.getElementById("p2").onclick = function click() {
      swapT();
    }
    document.getElementById("img1").onclick = function click() {
      swapI();
    }
    document.getElementById("img2").onclick = function click() {
      swapI();
    }
    document.getElementById("imgDetails").onclick = function click() {
      newDoc();
    }
    document.getElementById("convertButton").onclick = function click() {
      converter();
    }

}
