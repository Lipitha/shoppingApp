import axios from "axios";
import { useState } from "react";
import { API_KEY } from "../utilities/uiService";

function WeatherApp() {
  const [place, setPlace] = useState("");
  const [weatherData, setWeatherData] = useState({
    country: "",
    temp: "",
    description: "",
    feelsLike: ""
  });
  const weatherPlaceHandler = (event) => {
    const { value } = event.target;
    setPlace(value);
  };
  const fetchWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=${API_KEY}`
      )
      .then((response) => {
        console.log(response.data);
        setWeatherData({
          country: response.data.sys.country,
          temp: response.data.main.temp,
          description: response.data.weather[0].description,
          feelsLike: response.data.main.feels_like
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h3>Weather App </h3>
      <div>
        Enter place name :
        <input type="text" value={place} onChange={weatherPlaceHandler} />
        <button onClick={fetchWeather}>Fetch Weather</button>
      </div>
      {weatherData.description !== "" ? (
        <div>
          <h4>City : {place}</h4>
          <h5>Country :{weatherData.country}</h5>
          <h5>Temperature:{weatherData.temp}</h5>
          <h5>Description:{weatherData.description}</h5>
          <h5>Feels Like:{weatherData.feelsLike}</h5>
        </div>
      ) : (
        <h5>search for city</h5>
      )}
    </div>
  );
}
export default WeatherApp;
