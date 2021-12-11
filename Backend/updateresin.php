<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
include "connection.php";

$data_from_ionic = json_decode(file_get_contents("php://input"));
$username = $data_from_ionic->loggedusername;
$resincount = $data_from_ionic->resincount;

if ((isset($username) && $username != "") && $resincount != "") {

    $query = "UPDATE users SET resin_count=? WHERE username =?";
    $stmt = $connection->prepare($query);
    $stmt->bind_param("ss", $resincount, $username);
    $stmt->execute();

    // $json = json_encode($resincount);
    // print $json;
    $json = json_encode("true");
    print $json;
} else {
    $json = json_encode("false");
    print $json;
}

// $username = $_GET["username"];
// $resincount = $_GET["resincount"];
// $query = "UPDATE users SET resin_count=? WHERE username =?";
// $stmt = $connection->prepare($query);
// $stmt->bind_param("ss", $resincount, $username);
// $stmt->execute();

// $json = json_encode($resincount);
// print $json;

// CONCATENATE THE GET PART "?username" BY PUTTING A VARIABLE NAME IN ANDROID STUDIO AND ADDING IT HERE
//MAKE IT PRINT A JSON WITH TRUE OR SUCCESS OR RESINCOUNT
