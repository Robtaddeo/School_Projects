//Slider from w3 schools

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
console.log("testing");

// jQuery
$(document).ready(function(){
   $("#blog-button").click(function(){
       $("p").fadeToggle(2000);
   });
   $('img').click(function(){
     $(this).animate({height: "500px"});
     console.log("Working");
   });

});
