let weather = {
    "apiKey": "48742a43ee247a11bbc2c81076054696",
    fetchWeather: function () {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?lat=87.6298&lon=41.8781&units=metric&appid=48742a43ee247a11bbc2c81076054696"
        ).then((response)=> response.json())
        .then((data)=> console.log(data));
    },
};
