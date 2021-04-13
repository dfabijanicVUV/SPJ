<?php

function LoadUsers()
{
    $string = file_get_contents("users.json");
    $oUsers = json_decode($string, true);
    return $oUsers;
}

function CheckUser($sUsername, $sPassword)
{
    $oUsers = LoadUsers();

    foreach($oUsers as $oUser)
    {
        if($oUser["username"] == $sUsername && $oUser["password"] == $sPassword)
        {
            return $oUser;
        }
        else{
            echo "Wrong username or password";
        }
    }
}

function SetSession($oUser)
{
    $_SESSION['username'] = $oUser['username'];    
}
?>