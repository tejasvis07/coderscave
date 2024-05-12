const apiKey = 'dda1c7dcfa0ff250416f1b11e5ef9254'; // Replace with your OpenWeatherMap API key

function fetchWeather() {
    const city = document.getElementById("searchBox").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Weather data not found for ' + city);
            }
            return response.json();
        })
        .then(data => updateWeatherDisplay(data))
        .catch(error => alert(error));
}

function updateWeatherDisplay(data) {
    const weatherDisplay = document.getElementById("weatherDisplay");
    weatherDisplay.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].main}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}

document.getElementById("searchBox").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        fetchWeather();
    }
});