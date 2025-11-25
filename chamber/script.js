const apiKey = "f8f5d304bbe4463d956ff395160e560f";
const city = "Chosica";
const country = "PE";

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}&lang=en`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Weather data not found");

    const data = await response.json();

    document.getElementById("currentWeather").innerHTML = `
      <strong>${data.name}</strong><br>
      ${data.weather[0].description} ${getWeatherEmoji(data.weather[0].main)} <br>
      🌡️ ${data.main.temp.toFixed(1)}°C | 💨 ${data.wind.speed} m/s | 💧 ${data.main.humidity}%
    `;
  } catch (error) {
    document.getElementById("currentWeather").textContent = "Unable to load weather data ☁️";
    console.error("Weather error:", error);
  }
}

function getWeatherEmoji(condition) {
  switch (condition.toLowerCase()) {
    case "clear":
      return "☀️";
    case "clouds":
      return "☁️";
    case "rain":
      return "🌧️";
    case "thunderstorm":
      return "⛈️";
    case "snow":
      return "❄️";
    case "mist":
    case "fog":
      return "🌫️";
    default:
      return "🌤️";
  }
}

document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

getWeather();
