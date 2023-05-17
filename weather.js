// Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
const apiKey = 'YOUR_API_KEY';

// Fetch weather forecast data from the API
fetchWeatherForecast();

async function fetchWeatherForecast() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Mount%20Hotham,au&appid=${apiKey}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch weather forecast');
    }

    const data = await response.json();
    displayWeatherForecast(data);
  } catch (error) {
    console.error(error);
  }
}

function displayWeatherForecast(data) {
  const weatherForecastElement = document.getElementById('weatherForecast');

  // Extract the relevant data from the API response
  const temperature = data.main.temp;
  const description = data.weather[0].description;

  // Create the HTML content to display the weather forecast
  const html = `
    <h2>Mount Hotham Weather Forecast</h2>
    <p>Temperature: ${temperature}°C</p>
    <p>Description: ${description}</p>
  `;

  // Insert the HTML content into the weatherForecastElement
  weatherForecastElement.innerHTML = html;
}
