//Problems 1 & 3

function changeText(id){
  var element = document.getElementById(id);
  var newText = prompt('Enter what you want the text to be: ');
  element.innerText = newText;
}

function changeHTML(id){
  var element = document.getElementById(id);
  var newHTML = prompt('Enter what you want the text to be: ');
  element.innerHTML = newHTML;
}


// Problems 2 & 3

var header = 3

function changeLink(){
  var element = document.getElementById('link');
  var newLink = prompt('Enter what you want the link to be: ');
  element.href = newLink;
}

// jQuery
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown();
});
