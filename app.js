let apiKey = "fea8ea8f248eb5b0e7d253437c4ff972";

async function searchWeather() {
    const cityName = document.getElementById('city-name').value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
    const data = await response.json();
  
    const weatherData = `
      <h1>${data.name}</h1>
      <p>Temperature: ${data.main.temp / 12}°C</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind speed: ${data.wind.speed} km/h</p>
    `;
  
    document.getElementById('weather-data').innerHTML = weatherData;
  }
  