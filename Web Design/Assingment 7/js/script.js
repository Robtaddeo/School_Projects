//Slider from w3 schools

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
console.log("testing");

// checks criteria based on category
function getItems(){


  console.log("click-works");
  var type = document.getElementById("shop-type");
  var selectedValue = type.options[type.selectedIndex].value;

  // If clothes are selected, hide shoes and accesories

  if (selectedValue == "clothes"){
    event.preventDefault();
    document.getElementById("shop-box-shoe").style.display = "none";
    document.getElementById("shop-box-accesory").style.display = "none";
    document.getElementById("shop-box-clothes").style.display = "initial";

  // If shoes are selected, hide clothes and accesories

  }
  else if (selectedValue == "shoes"){
    document.getElementById("shop-box-clothes").style.display = "none";
    document.getElementById("shop-box-accesory").style.display = "none";
    document.getElementById("shop-box-shoe").style.display = "initial";

  // If accesories are selected, hide clothes and shoes

  }
  else if (selectedValue == "accesories"){
    document.getElementById("shop-box-clothes").style.display = "none";
    document.getElementById("shop-box-shoe").style.display = "none";
    document.getElementById("shop-box-accesory").style.display = "initial";

  }

  // Show all

  else {
    document.getElementById("shop-box-accesory").style.display = "initial";
    document.getElementById("shop-box-clothes").style.display = "initial";
    document.getElementById("shop-box-shoe").style.display = "initial";
  }


}



// jQuery

$(document).ready(function(){

  // Fades main content in on front page
   $("#hero-image").fadeIn();
   $("#title-content").fadeIn(3000);
   $("#title-content").css({"display": "flex", "justify-content" : "center", "align-items": "center"});

   $("#blog-button-1").click(function() {
     $("#read-more-1").fadeIn();
   });

   $("#blog-button-2").click(function() {
     $("#read-more-2").fadeIn();
   });

   $("#blog-button-3").click(function() {
     $("#read-more-3").fadeIn();
   });



});
