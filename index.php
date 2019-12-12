<?php
$servername = "databasepeili.c1emz48wiw83.us-east-1.rds.amazonaws.com";
$username = "admin";
$password = "alypeili";

$conn = new mysqli($servername, $username, $password);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$query = "SELECT * FROM innodb.weather ORDER BY wid DESC limit 1";

?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="style.css">
</head> 

<body>
    <div class="row">
        <div class="column">              
                    <center><p id='time'></p><br>
                        <div class="location">
                            <p>-</p>
                        </div><br><br><br>
                            <div class="temperature-value"><p>- °<span>c</span></p>
                            </div>

                            <div class="weather-icon">
                                <img src="icons/unknown.png" alt="">
                            </div> 
                            <div class="temperature-description">
                                <p> - </p>

                            </div> <br>
                            °c<br>
                        <div class="desc-font">indoors</div>                   

                        
                        </center>                     
            </div>

              

            <div class="column">
                <center>
                    
                    <div class="bottom"><div class="holiday-greeting"><p></p></div><div class="hour-greeting"><p></p></div> 
                </center>
            </div>

            <div class="column">
                <center><div class="small-font"><p id='currentWeekday'></p> <p id='date'></p> <br><br><br>
                    in 5 days  <br><br>                                 
                    
                       <div class="fore-temperature-value1"><p>- °<span>c</span></p> <p id='foreday1'></p></div>
                        <div class="fore-weather-icon1">
                            <img src="icons/unknown.png" alt="">
                        </div>
                        <div class="fore-temperature-value2"><p>- °<span>c</span></p> <p id='foreday2'></p></div>
                        <div class="fore-weather-icon2">
                            <img src="icons/unknown.png" alt="">
                        </div>
                        <div class="fore-temperature-value3"><p>- °<span>c</span></p> <p id='foreday3'></p></div>
                        <div class="fore-weather-icon3">
                            <img src="icons/unknown.png" alt="">
                        </div>
                        <div class="fore-temperature-value4"><p>- °<span>c</span></p> <p id='foreday4'></p></div>
                        <div class="fore-weather-icon4">
                            <img src="icons/unknown.png" alt="">
                        </div>
                        <div class="fore-temperature-value5"><p>- °<span>c</span></p> <p id='foreday5'></p></div>
                        <div class="fore-weather-icon5">
                            <img src="icons/unknown.png" alt="">
                        </div></div>  <br>
</center>             
            </div>
            </div>

            <script src="app.js"></script>
</body>
</html>