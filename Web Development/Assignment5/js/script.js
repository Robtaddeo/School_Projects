$( document ).ready(function() {

  // Style Application

  $("#changeStyles").click(function(){
    $("#special").css("color", "green");
    $(".highlight").css("background-color", "yellow");

    $("p").each(function(){
      $(this).css({"color": "blue", "font-size": "15px", "width": "100px"});
      alert($(this).text());
    });
  });

  // Image Application

  $("#hideImg").click(function(){
    $("#imgApplication").css("visibility", "hidden");
  });

  $("#showImg").click(function(){
    $("#imgApplication").css("visibility", "visible");
  });

  $("#fadeOut").click(function(){
    $("#imgApplication").fadeOut( "500", function() {
    });
  });

  // Animation Application

  $("#animateBtn").click(function(){
    $( "#animate" ).animate({
      opacity: 0.50,
      left: "+=-300",
      height: "+=100",
      width: "+=100"
    }, 5000, function() {
    });
  });

  // Username and Password
  $("#inputBtn").click(function(){
    username = $("#username").val();
    password = $("#password").val();

    if(username == null || username == ""){
      $( "#username" ).focus();
      $( "#username" ).css("background-color", "yellow");
      alert("Please enter a value for username");
    }

    if(password == null || password == ""){
      $( "#password" ).focus();
      $( "#password" ).css("background-color", "yellow");
      alert("Please enter a value for password");
    }

    else {
      $( "#usernameP").text("Username: " + username);
      $( "#passwordP").text("Password: " + password);
    }

  });

});
