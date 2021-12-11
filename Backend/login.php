<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
include "connection.php";

$data_from_ionic = json_decode(file_get_contents("php://input"));
$username = $data_from_ionic->username;
$password = $data_from_ionic->password;

if ((isset($username) && $username != "") && strlen($password) >= 8) {
    $hashedpassword = hash("sha256", $password);
   
    $query = "SELECT username,password FROM users WHERE username=? AND password=?";
    $stmt = $connection->prepare($query);
    $stmt->bind_param("ss", $username, $hashedpassword);
    $stmt->execute();
    $results = $stmt->get_result();

    $temp_array = [];

    while ($row = $results->fetch_assoc()) {
        $temp_array[] = $row;
    }
    if ($temp_array == []) {
        $json = json_encode("false");
        print $json;

    } else {
        $json = json_encode("true");
        print $json;
    }

}
// $username;
// $password;

// if (isset($_POST["username"]) && $_POST["username"] != "") {
//     $username = $_POST["username"];
// } else {
//     die("Don't mess around bro ;)");
// }

// if (isset($_POST["password"]) && $_POST["password"] != "") {
//     $password = hash("sha256", $_POST["password"]);
// } else {
//     die("Don't mess around bro ;)");
// }
// $query = "SELECT username,password FROM users WHERE username='$username' AND password='$password'";
// $stmt = $connection->prepare($query);
// $stmt->execute();
// $results = $stmt->get_result();

// $temp_array = [];

// while ($row = $results->fetch_assoc()) {
//     $temp_array[] = $row;
// }
// if ($temp_array == []) {
//     $json = json_encode("User Doesn't Exist!");
//     print $json;
// } else {
//     $json = json_encode($temp_array);
//     print $json;
// }
