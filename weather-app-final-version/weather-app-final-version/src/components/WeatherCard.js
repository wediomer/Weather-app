import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './WeatherCard.css';

const WeatherCard = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);

  function getNextThreeDays() {
    const today = new Date();
    const days = [];
    for (let i = 0; i < 4; i++) {
      const nextDay = new Date(today.getTime() + 24 * 60 * 60 * 1000 * i);
      const formattedDate = nextDay.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
      });
      days.push(formattedDate);
    }
    return days;
  }

  useEffect(() => {
    const fetchData = async () => {
      const cityEncoded = encodeURIComponent(city);
      const apiBaseURL = "https://api.openweathermap.org/data/2.5/forecast";
      const apiKey = process.env.REACT_APP_WEATHER_API_KEY || "43e74d54eb2c61bb69001a1e3c4b7a15";

      const nextThreeDays = getNextThreeDays();
      const weatherDataList = [];

      const options = `${apiBaseURL}?q=${cityEncoded}&appid=${apiKey}`;
      try {
        const response = await axios.get(options);
        const filteredData = response.data.list.filter((data) => {
          const dataDate = new Date(data.dt_txt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
          });
          return nextThreeDays.includes(dataDate);
        });

        // Get first forecast for each day
        for (const day of nextThreeDays) {
          const dayForecast = filteredData.find((data) => {
            const dataDate = new Date(data.dt_txt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
            });
            return dataDate === day;
          });
          if (dayForecast) {
            weatherDataList.push(dayForecast);
          }
        }

        setWeatherData(weatherDataList);
      } catch (error) {
        console.error(error);
      }
    };

    if (city) {
      fetchData();
    }
  }, [city]);

  if (!city) {
    return <div style={{ textAlign: 'center', color: 'white', fontSize: '1.125rem', padding: '3rem 1rem', fontWeight: '500' }}>Enter a city to get weather information</div>;
  }

  if (!weatherData) {
    return <div style={{ textAlign: 'center', color: 'white', fontSize: '1.125rem', padding: '3rem 1rem', fontWeight: '500' }}>Loading...</div>;
  }

  return (
    <div className="weather-card-container">
      {weatherData.map((data, index) => (
        <div className="card" key={index}>
          <div className="card-body">
            <h5 className="card-title">{city}</h5>
            <h6 className="card-subtitle mb-2">
              {getNextThreeDays()[index]}
            </h6>
            <img
              src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
              alt="Weather Icon"
              className="img-fluid"
            />
            <p className="card-text">
              Temperature: {Math.round(data.main.temp - 273.15)}°C
            </p>
            <p className="card-text">Humidity: {data.main.humidity}%</p>
            <p className="card-text">Wind Speed: {data.wind.speed} m/s</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherCard;
