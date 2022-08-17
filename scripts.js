// OpenWeatherMap API. Do not share it publicly.
const api = '48742a43ee247a11bbc2c81076054696';

//event listner that runs every time the page is loaded
window.addEventListener('load', ()=>{
    let long; //longitude
    let lat; //latitude
    //Accessing geolocation of user
    if (navigator.geolaction) {
        navigator.geolocation.getCurrentPosition((position)={
            //storing longitude and latitude in variables
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;

            //using fetch to get data
            fetch(base)
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                const {temp} = data.main;
                const place = data.name;
                const {description, icon} = data.weather[0];
                const {sunrise, sunset} = data.sys;

                const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

                const fahrenheit = (temp * 9) / 5 + 32;

                //converting epoch(unix) time to GMT
                const sunriseGMT = new Date(sunrise * 1000);
                const sunsetGMT = new Date(sunset * 1000);
            });
        });
    }
});

