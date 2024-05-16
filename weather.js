document.getElementById('weatherForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const city = document.getElementById('cityInput').value;
    getWeatherData(city);
});


function getWeatherData(city) {
    const apiKey = '31fb328bf7f84855ae3185427241602';
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    console.log(apiUrl)
        // https://api.openweathermap.org/data/2.5/weather?q=malmö&appid=31fb328bf7f84855ae3185427241602&units=metric
        // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayWeatherInfo(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            displayWeatherInfoError();
        });
}

function displayWeatherInfo(data) {
    const weatherInfoContainer = document.getElementById('weatherInfo');
    weatherInfoContainer.innerHTML = `
        <h2>${data.location.name}, ${data.location.country}</h2>
        <p>Temperature: ${data.current.temp_c} &deg;C</p>
        <p>Condition: ${data.current.condition.text}</p>
        <img src="https:${data.current.condition.icon}" alt="Weather Icon">
        <p>Wind Speed: ${data.current.wind_kph} km/h, Direction: ${data.current.wind_dir}</p>
        <p>Pressure: ${data.current.pressure_mb} mb</p>
        <p>Humidity: ${data.current.humidity}%</p>
        <p>Cloudiness: ${data.current.cloud}%</p>
        <p>Feels Like: ${data.current.feelslike_c} &deg;C</p>
        <p>Visibility: ${data.current.vis_km} km</p>
        <p>UV Index: ${data.current.uv}</p>
    `;
}

function displayWeatherInfoError() {
    const weatherInfoContainer = document.getElementById('weatherInfo');
    weatherInfoContainer.innerHTML = '<p>Error fetching weather data. Please try again.</p>';
}
