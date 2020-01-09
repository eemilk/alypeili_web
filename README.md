## alypeili_web
This is a Smartmirror project's webview files. Late autumn 2019 school project. My learning goal to the project was to get familiar with IoT technologies and web development. Smartmirror was built with Raspberry PI and Nucleo microprosessor which had set up motion and temperature sensor.
Turning the power on to the device Raspberry Pi would open a kiosk mode webview hosted by AWS Ubuntu server and Apache2. Raspberry Pi and Nucleo microprosessor would log temperature data to database which the webview displays.
Webview also displays location weather outside the room and 5 day forecast with openweather API.

## Stack used with this directory
- Amazon Web Service's EC2 virtual Ubuntu server
- Apache 2
- Amazon Web Service's RDS database hosting server
- MySQL Database
- PHP for communicating with MySQL database, receiving datavalues from there
- Javascript for taking connection and parsing openweather.com API, time and date display
- CSS styling
- HTML DOM
