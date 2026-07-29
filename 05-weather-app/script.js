//elements
const getWeatherBtn = document.getElementById("get-weather-btn");
const citySelect = document.getElementById("city-select");
const weatherContainer = document.getElementById("weather-container");
const weatherIcon = document.getElementById("weather-icon");
const locationEl = document.getElementById("location");
const weatherMain = document.getElementById("weather-main");
const mainTemp = document.getElementById("main-temperature");
const feelsLike = document.getElementById("feels-like");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");
const windGust = document.getElementById("wind-gust");

//fetch weather from api
async function getWeather(city) {
  try {
    const res = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

// show weather in the ui
async function showWeather(city) {
  const data = await getWeather(city);

  if (!data || data.cod === "404") {
    alert("Something went wrong, please try again later.");
    return;
  }

  // fallback to N/A if value is missing
  const val = (v) => (v !== undefined && v !== null ? v : "N/A");

  weatherIcon.src = val(data.weather?.[0]?.icon);
  weatherIcon.alt = val(data.weather?.[0]?.description);
  locationEl.textContent = val(data.name);
  weatherMain.textContent = val(data.weather?.[0]?.main);
  mainTemp.textContent = `${val(data.main?.temp)} °C`;
  feelsLike.textContent = `Feels like: ${val(data.main?.feels_like)} °C`;
  humidityEl.textContent = `Humidity: ${val(data.main?.humidity)} %`;
  windEl.textContent = `Wind: ${val(data.wind?.speed)} m/s`;
  windGust.textContent = `Gust: ${val(data.wind?.gust)} m/s`;

  weatherContainer.classList.add("show");
}

// button click - do nothing if no city selected
getWeatherBtn.addEventListener("click", () => {
  const city = citySelect.value;
  if (!city) return;
  showWeather(city);
});
