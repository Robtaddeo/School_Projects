<?php
ini_set('display_errors', true);
ini_set('display_startup_errors', true);
error_reporting(E_ALL);
?>

<!DOCTYPE html>
  <html>
  <link rel="stylesheet" href="../css/style.css">
  <link href="https://fonts.googleapis.com/css?family=Dosis" rel="stylesheet">
  <body>

    <?php
      $name = $_GET["name"];
      $email = $_GET["email"];
      $item =  $_GET["products"];
      $quantity = floatval($_GET["quantity"]);
      $price = 59.99;

      print $name;

      if ($item == "pants") {
        $price = 120;
      }

      $total = $quantity * $price;

      print "<h1>Reciept</h1>";

      print "<ul style='text-align: left;' >
            <li><h2>Name: $name</h2></li>
            <li><h2>Email: $email</h2></li>
            <li><h2>Item: $item</h2></li>
            <li><h2>Quantity: $quantity</h2></li>
            <li><h2>Total: $total</h2></li>
            </ul>";
      print "<h2 style='text-align:left;'><a href='../index.html'>Go back</a></h2>";




     ?>
  </body>
  </html>
