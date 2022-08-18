let weather = {
    "apiKey": "48742a43ee247a11bbc2c81076054696",
    fetchWeather: function (lat, lon) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?lat=" 
            + lat 
            + "&lon=" 
            + lon 
            + "&units=metric&appid=" 
            + this.apiKey,
        ).then((response)=> response.json())
        .then((data)=> console.log(data));
    },
    displayWeather: function(data) {

    }
};
 