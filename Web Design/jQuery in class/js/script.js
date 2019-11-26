// jQuery Shit

$( document ).ready(function() {

  $("#par6").hide();


  // Number 1

  $("#btn1").click(function(){
    $("#par10").slideUp();
  });

  $("#btn2").click(function(){
    $("#par10").slideDown();
  });


  // Number 2
  $( "#par1" ).hover(function() {
    $( this ).fadeOut( 1000 );
    $( this ).fadeIn( 1000 );
  });

  // Number 3

  $( "#par2" ).click(function() {
    $( "#par2" ).text("You clicked me!");
  });

  // Number 4

  $( "#par3" ).click(function() {
    $("#par3").css({"background-color": "yellow", "font-size": "200%"});
  });

  // Number 5

  $( "#box" ).click(function() {
    $("#box").animate({left: '250px'});
  });

  // Number 6

  $( "#par5" ).click(function() {
    $("#par5").hide();
  });

  // Number 7

  $( "#btn3" ).click(function() {
    $("#par6").show();
  });

  // Number 8

  $( "#btn4" ).click(function() {
    $("#par7").toggle();
  });

  // Number 9

  $( "#par8" ).click(function() {
    $("body").css({"background-color": "blue", "display": "grid", "grid-template-columns": "1fr 1fr 1fr 1fr"});
  });

  // Number 10

  $( "#par9" ).click(function() {
    $("#par9").css({"transform": "rotate(-30deg)", "text-align": "center"});
  });







});
