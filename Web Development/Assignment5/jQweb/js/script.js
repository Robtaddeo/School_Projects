$( document ).ready(function() {
  $("#video").hide();
  $("#navbar").hide();
  $("#image").hide();
  $(".paragraph").hide();

  $( "#navbar" ).fadeIn( "5000", function() {
  // Animation complete
  });

  $("#videoLink").click(function(){
    $("#video").show();
    $("#image").hide();
    $(".paragraph").hide();
  });

  $("#imageLink").click(function(){
    $("#video").hide();
    $("#image").show();
    $(".paragraph").hide();
  });

  $("#textLink").click(function(){
    $("#video").hide();
    $("#image").hide();
    $(".paragraph").show();
  });





});
