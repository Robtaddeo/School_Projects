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
        $username = $_POST['register-username'];
        $password = $_POST['register-password'];
        $myFile = "users.txt";
        $fh = fopen($myFile, 'a') or die("can't open file");
        $stringData = $username. ":" . $password . "\n";
        fwrite($fh, $stringData);
        fclose($fh);

        print "<p><h3> Welcome $username. Thanks for Signing Up!</h3></p>\n";
        print "<a href='../index.html'>Back to Site</a>"

      ?>
  </div>

  </body>
</html>
