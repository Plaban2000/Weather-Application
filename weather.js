//  Create your own Weather App api key from https://openweathermap.org/

/* Step 1: Set up Api Key */
const apiKey = '6d055e39ee237af35ca066f35474e9df';

function getWeather(){
    const city = document.getElementById('searchCity').value;
    if(city === ''){
        alert("Please enter a valid city.");
        return;
    }

    /* Step 2: Set up apiUrl */
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    /* Step 3 : Fetch JSON Data */

    fetch(apiUrl)
    .then(response => response.json())
    .then(data =>{
        displayWeather(data);
    })
    .catch(error => {
        console.error('Error Occurred ', error);
    });
}

function displayWeather(data){
    const cityName = data.name;
    const lat = data.coord.lat;
    const lon = data.coord.lon;
    const speed = (data.wind.speed * 3.6).toFixed(2) + " Km/h";
    const timezone = data.timezone;
    const deg = data.wind.deg;
    const weather = data.weather[0].description;
    const visibility = data.visibility;




    

    const apiUrl2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetch(apiUrl2)
    .then(response => response.json())
    .then(data =>{
        displayWeatherDetails(data);
    })
    .catch(error => {
        console.error('Error Occurred', error);
    });

    document.getElementById('city').innerHTML = cityName;
    document.getElementById('Latitude').innerHTML = lat;
    document.getElementById('Longitude').innerHTML = lon;
    document.getElementById('Wind_speed').innerHTML = speed;
    document.getElementById('Weather').innerHTML = weather;
    document.getElementById('Wind_deg').innerHTML = deg;
    document.getElementById('Timezone').innerHTML = timezone;
    document.getElementById('Visibility').innerHTML = visibility;  
    console.log(data);
}

function displayWeatherDetails(data){
    var temp = (data.current.temp - 273.15).toFixed(1);
    var feels_like = (data.current.feels_like - 273.15).toFixed(1);
    var dew_point = (data.current.dew_point - 273.15).toFixed(1);
    const sunrise = new Date(data.current.sunrise * 1000).toLocaleTimeString();
    const sunset = new Date(data.current.sunset * 1000).toLocaleTimeString();

    document.getElementById('temp').innerHTML = temp + ' °C';

    document.getElementById('humidity').innerHTML = data.current.humidity;

    document.getElementById('feels_like').innerHTML = feels_like + ' °C'; 

    document.getElementById('dew_point').innerHTML = data.current.dew_point;
    
    document.getElementById('pressure').innerHTML = data.current.pressure + ' hPa';

    document.getElementById('sunrise').innerHTML = sunrise;

    document.getElementById('sunset').innerHTML = sunset;







    
}