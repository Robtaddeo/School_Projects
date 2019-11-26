// Img Array
var imgArray = [
  'https://consequenceofsound.files.wordpress.com/2017/04/homer-simpson-feature1.png?w=807',
  'https://costumewall.com/wp-content/uploads/2017/08/peter-griffin.jpg',
  'https://vignette.wikia.nocookie.net/rickandmorty/images/a/a6/Rick_Sanchez.png/revision/latest?cb=20160923150728',
  'http://www.tvstyleguide.com/wp-content/uploads/2017/09/south_park_eric_cartman_blue_beanie_red_jacket-1020x560.jpg',
  'https://vignette.wikia.nocookie.net/rickandmorty/images/4/41/Morty_Smith.jpg/revision/latest?cb=20170217193441',
  'https://pmcvariety.files.wordpress.com/2016/05/spongebob-nickelodeon.jpg?w=1000&h=563&crop=1',
  'https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Patrick_Star.png/220px-Patrick_Star.png',
  'https://vignette.wikia.nocookie.net/fairlyoddparents/images/5/50/Stock_Image_of_Timmy_Turner.png/revision/latest?cb=20180813140232&path-prefix=en',
  'https://vignette.wikia.nocookie.net/jimmyneutron/images/5/57/Jimmy_Neutron.png/revision/latest?cb=20180219044703',
  'https://vignette.wikia.nocookie.net/dpwikia/images/4/45/Render-_Danny_1.png/revision/latest?cb=20170613044135'
];

running = true;

function randomImg(){
  img = document.getElementById('randomImg');
  img.src = imgArray[Math.floor(Math.random() * 10)];
}

function changeProp(){
  img = document.getElementById('imgProp');
  img.style.width = "400px";
  img.style.borderRadius = "10px";
  img.style.border = '1px solid #021a40';
  img.style.height = '200px';
}

function checkStatus(){
  return false;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function slideshow(){
  img = document.getElementById('slideshow');
  var i;

  while (running == true) {
    if (i > 9){
      i = 0;
    }
    for(i = 0; i < imgArray.length; i++){
      if(checkStatus == false){
        break;
      }
      img.src = imgArray[i];
      await sleep(2000);
    }
  }
}


function convert(){
  var value = document.getElementById("dollar").value;
  document.getElementById("euro").value = value * 0.87;
}

function validateForm(){
  var name1 = document.getElementById('fname');
  var name2 = document.getElementById('lname');
  var email = document.getElementById('email');
  var zip = document.getElementById('zip');
  var car = document.getElementById('car');
  if (name1.value == "" || name1.value == null){
      alert ("You must enter value for first name");
      name1.focus();
      name1.select();
      name1.style.backgroundColor="#F00";
  }
  if (name2.value == "" || name2.value == null){
      alert ("You must enter value for last name");
      name2.focus();
      name2.select();
      name2.style.backgroundColor="#F00";
  }
  if(validateEmail(email.value) == false){
    alert ("You must enter a valid value for email");
    email.focus();
    email.select();
    email.style.backgroundColor="#F00";
  }
  if(zip.value.toString().length != 5){
    console.log(zip.toString.length);
    alert ("You must enter a valid value for zipCode");
    zip.focus();
    zip.select();
    zip.style.backgroundColor="#F00";
  }
  if(car.value != 'ferarri'){
    alert ("Obviously a Ferrari is the better car");
  }

}

function reset(){
  document.getElementById('fname').value=null;
  document.getElementById('lname').value=null;
  document.getElementById('email').value=null;
  document.getElementById('zip').value=null;
  document.getElementsByName('car').value=null;
}

function validateEmail(email)
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}



window.onload = function() {
  randomImg();
  document.getElementById("imgProp").onclick = function click() {
    changeProp();
  }
  document.getElementById("startButton").onclick = function click() {
    slideshow();
  }
  document.getElementById("formSubmit").onclick = function click() {
    validateForm();
  }
  document.getElementById("formReset").onclick = function click() {
    reset();
  }
  document.getElementById("breakButton").onclick = function click() {
    checkStatus();
  }
}
