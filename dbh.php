<?php

$servername = "databasepeili.c1emz48wiw83.us-east-1.rds.amazonaws.com";
$username = "admin";
$password = "alypeili";
$dbname = "alypeili";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"ajax_demo");
$sql="SELECT temperature * FROM TABLE weather";
$result = mysqli_query($con,$sql);

while ($row = mysql_fetch_assoc($result)) {
    echo $row['temperature'];
}

mysql_free_result($result);

?>