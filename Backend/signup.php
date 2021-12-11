<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
include "connection.php";

$data_from_ionic = json_decode(file_get_contents("php://input"));
$username = $data_from_ionic->username;
$password = $data_from_ionic->password;

if ((isset($username) && $username != "") && strlen($password) >= 8) {
    $query = "SELECT username FROM users WHERE username=?";
    $stmt = $connection->prepare($query);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $results = $stmt->get_result();

    $temp_array = [];

    while ($row = $results->fetch_assoc()) {
        $temp_array[] = $row;
    }
    if ($temp_array == []) {
        $hashedpassword = hash("sha256", $password);
        $query = "INSERT INTO users(username,password) VALUES(?,?)";
        $stmt = $connection->prepare($query);
        $stmt->bind_param("ss", $username, $hashedpassword);
        $stmt->execute();

        $json = json_encode("true");
        print $json;

    } else {
        $json = json_encode("Username is Already Taken");
        print $json;
    }

}

////////////////////////

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

// $query = "SELECT username FROM users WHERE username='$username'";
// $stmt = $connection->prepare($query);
// $stmt->execute();
// $results = $stmt->get_result();

// $temp_array = [];

// while ($row = $results->fetch_assoc()) {
//     $temp_array[] = $row;
// }
// if ($temp_array == []) {
//     $mysql = $connection->prepare("INSERT INTO users(username,password) VALUES(?,?)");
//     $mysql->bind_param("ss", $username, $password);
//     $mysql->execute();

//     $json = json_encode("true");
//     print $json;

// } else {
//     $json = json_encode("Username is Already Taken");
//     print $json;
// }
// $mysql->close();
// $connection->close();
// header("Location:index.html");
