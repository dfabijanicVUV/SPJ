<?php
  ob_start();
  session_start();
?>

<html lang = "en">
<head>
    <title>Login</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
      <?php include 'functions.php';?>

      <div>
         <?php
            $msg = '';
            
            if (isset($_POST['login']) && !empty($_POST['username']) 
               && !empty($_POST['password'])) {
				
               if ($_POST['username'] != '' && 
                  $_POST['password'] != '') {
                  var_dump(CheckUser($_POST['username'], $_POST['password']));
                   if(CheckUser($_POST['username'], $_POST['password']) != NULL)
                   {
                    SetSession(CheckUser($_POST['username'], $_POST['password']));
                    header("Location: users.php");
                   }
               }else {
                  $msg = 'Wrong username or password';
               }
            }
         ?>
      </div> <!-- /container -->
      
      <div class = "container">
      
         <form class = "form-signin" role = "form" 
            action = "<?php echo htmlspecialchars($_SERVER['PHP_SELF']); 
            ?>" method = "post">
            <h4 class = "form-signin-heading"><?php echo $msg; ?></h4>
            <h4>Username</h4> 
            <input type = "text" class = "form-control" 
               name = "username" 
               required autofocus></br>
            <h4>Password</h4> 
            <input type = "password" class = "form-control"
               name = "password"  required>
            <button  type = "submit" 
               name = "login">Login</button>
         </form>        
      </div> 
   </body>
</html>
