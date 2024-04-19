import PropTypes from "prop-types";

// Fetch weather data from OpenWeatherMap API.
const WeatherData = async (locationData) => {
  try {
    const response = await fetch(
      `api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=3ab168801793bb25d16b441c202bb748`
    );
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.error("Error:", error);
    return await Promise.reject("Unable to fetch weather data.");
  }
};

WeatherData.propTypes = {
  locationData: PropTypes.string.isRequired,
};

export default WeatherData;
