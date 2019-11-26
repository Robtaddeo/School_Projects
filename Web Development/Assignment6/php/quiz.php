<?php
ini_set('display_errors', true);
ini_set('display_startup_errors', true);
error_reporting(E_ALL);
?>

<!DOCTYPE html>
  <html>
  <head>
    <link href="https://fonts.googleapis.com/css?family=Dosis" rel="stylesheet">
    <link rel="stylesheet" href="../css/Style.css">
  </head>
  <body>

    <?php
      $answer1 = $_GET["question-1-answers"];
      $answer2 = $_GET["question-2-answers"];
      $answer3 = $_GET["question-3-answers"];
      $total = 0;

      if ($answer1 == "C") {
        $total = $total + 1;
        print "<h1>Question 1</h1>";
        print "<p>Correct Answer!</p>";
      }
      else {
        print "<h1>Question 1</h1>";
        print "<p>Correct Answer was C: The powerhouse of the cell. You picked $answer1</p>";
      }

      if ($answer2 == "B") {
        $total = $total + 1;
        print "<h1>Question 2</h1>";
        print "<p>Correct Answer!</p>";
      }
      else {
        print "<h1>Question 2</h1>";
        print "<p>Correct Answer was B: 1945. You picked $answer1</p>";
      }

      if ($answer3 == "D") {
        $total = $total + 1;
        print "<h1>Question 3</h1>";
        print "<p>Correct Answer!</p>";
      }
      else {
        print "<h1>Question 3</h1>";
        print "<p>Correct Answer was D: All of the Above. You picked $answer1</p>";
      }


      $percent = $total /3;

      print "<p>You got: $percent%</p>";
      print "<p><a href='../index.html'>Go back</a></p>";




     ?>
  </body>
  </html>
