<!DOCTYPE html>
<html>
  <head>
    <Title>Search Results</Title>
    <link rel="stylesheet" href="../css/style.css" />
    <link href="http://fonts.googleapis.com/css?family=Oswald:700|Droid+Serif:400,700italic" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,700" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>

  </head>
  <body>
    <center><h1>Search Results</h1>

    <?php
      $user = false;
      $myFile = "users.txt";
      $fp = fopen ( $myFile , 'r' );

      ini_set('display_errors', true);
      ini_set('display_startup_errors', true);
      error_reporting(E_ALL);

    ?>

    <?php

      $found = false;
      $myFile = "products.txt";
      $fp = fopen ( $myFile , 'r' );

      while ( $line = fgets ($fp)) {
          $line = trim($line);

          $info = explode(":", $line);

          if ($info[0] == $_POST['search']){
            $found = true;
            print("<h2>Name: $info[0]</h2>");
            print("<h4>Price: $info[1]</h4>");
            print("<p>Description: $info[2]</p>");
            print("<h4>Quantity: $info[3]</h4>");
            break;
          }

      }
      if ($found == false){
        print("<h2>No related Items found</h2>");
      }




    ?>
    </center>
  </body>
</html>
