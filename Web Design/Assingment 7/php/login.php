<!DOCTYPE html>
<html>
  <head>
    <Title>User Sign Up</Title>
    <link rel="stylesheet" href="../css/style.css" />
    <link href="http://fonts.googleapis.com/css?family=Oswald:700|Droid+Serif:400,700italic" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,700" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>

  </head>
  <body>
    <div class="container">
      <?php
        ini_set('display_errors', true);
        ini_set('display_startup_errors', true);
        error_reporting(E_ALL);
      ?>

      <?php
        // if (isset ($_POST['submit'])) {
          $user = false;
          $myFile = "users.txt";
          $fp = fopen ( $myFile , 'r' );

          while ( $line = fgets ($fp)) {
              $line = trim($line);

              $info = explode(":", $line);

              if ( ($info[0] == $_POST['login-username']) && ($info[1] == $_POST['login-password'] ) ) {
                $user = TRUE;
                break;
              }

          }

          if ($user) {
            print ("<center><h1> Welcome, ".$_POST['login-username'].". You are now logged in!</h1>");
            print "<h3><a href='../index.html'>Back to Site</a></h3></center>";
          }

          else {
            print ("<h1>The username and password did not match!</h1>");
            print "<a href='../index.html'>Back to Site</a>";
          }
        // }
      ?>
  </div>

  </body>
</html>
