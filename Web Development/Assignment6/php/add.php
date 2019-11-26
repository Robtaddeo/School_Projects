<?php
ini_set('display_errors', true);
ini_set('display_startup_errors', true);
error_reporting(E_ALL);
?>

<!DOCTYPE html>
  <html>
  <body>

    <?php
      $num1 = floatval($_GET["first"]);
      $num2 = floatval($_GET["second"]);
      $operator = $_GET["operation"];

      if ($operator == "add") {
        $var3 = $num1 + $num2;
        $output = $num1 . " + " . $num2 . " = " . $var3;
      }
      elseif ($operator == "subtract") {
        $var3 = $num1 - $num2;
        $output = $num1 . " - " . $num2 . " = " . $var3;
      }
      elseif ($operator == "multiply") {
        $output = $num1 . " - " . $num2 . " = " . $num1 * $num2;
      }
      elseif ($operator == "divide") {
        $output = $num1 . " - " . $num2 . " = " . $num1 / $num2;
      }


      print "<p>$output</p>";
      print "<p><a href='../index.html'>Go back</a></p>";




     ?>
  </body>
  </html>
