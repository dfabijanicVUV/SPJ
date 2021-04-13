<?php
    include 'functions.php';
    session_start();
    $oUsers = LoadUsers();
    echo "<table border='1'>";
    echo "<tr>";
    echo "<td>Br</td>";
    echo "<td>Users</td>";
    echo "</tr>";
    echo "<tr>";

    echo "</tr>";
    $i = 1;
    foreach($oUsers as $oUser)
    {
    echo "<tr>";
    echo "<td>$i</td>";
    if($_SESSION['username'] == $oUser['username'])
    {
        echo '<td style="color:red" >'.$oUser['username']."</td>";
    }
    else{
        echo "<td>".$oUser['username']."</td>";
    }    
    echo "</tr>";
    $i++;
    }
    echo "</table>";
?>