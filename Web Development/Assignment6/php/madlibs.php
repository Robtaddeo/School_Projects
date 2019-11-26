<?php
ini_set('display_errors', true);
ini_set('display_startup_errors', true);
error_reporting(E_ALL);
?>

<!DOCTYPE html>
  <html>
  <body>
    <h1>Here is your <i>Mad Libs</i> output!</h1>

    <?php
      $adj1 = $_GET["adj1"];
      $adj2 = $_GET["adj2"];
      $noun1 = $_GET["noun1"];
      $verb1 = $_GET["verb1"];
      $noun2 = $_GET["noun2"];
      $num1 = $_GET["num1"];
      $verb2 = $_GET["verb2"];
      $noun3 = $_GET["noun3"];

      $output = "It was during the battle of " . $noun1 . " when I was running through a " . $noun2 .  " when a " . $noun3 . " went off right next to my platoon. Our Medic yelled for us to " . $verb1 . " to the nearest Rome we could find. When we got to the beach we " . $verb2 . " to start a fire. As we were starting the fire the enemy saw the " . $adj1 . " smoke from the fire and started throwing  " . $num1 . " rocks at us. we all quickly ducked behind the " .$adj2 . " hill at the beach and returned fire. we quickly eliminated the enemy and were Happy that we had won the battle.	";



      print "<p>$output</p>";
      print "<p><a href='../madlibs.html'>Make Another</a></p>";




     ?>
  </body>
  </html>
