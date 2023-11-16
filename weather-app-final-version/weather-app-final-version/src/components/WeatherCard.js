import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

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
      const apiKey = "43e74d54eb2c61bb69001a1e3c4b7a15";

      const nextThreeDays = getNextThreeDays();
      const weatherDataList = [];

      for (const day of nextThreeDays) {
        const options = `${apiBaseURL}?q=${cityEncoded}&appid=${apiKey}`;
        try {
          const response = await axios.get(options);
          const filteredData = response.data.list.filter((data) => {
            const dataDate = new Date(data.dt_txt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
            });
            return dataDate === day;
          });
          weatherDataList.push(filteredData[0]);
        } catch (error) {
          console.error(error);
        }
      }

      setWeatherData(weatherDataList);
    };

    if (city) {
      fetchData();
    }
  }, [city]);

  if (!city) {
    return <div>Enter a city to get weather information</div>;
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card-container" style={{ display: "flex", justifyContent: "space-between" }}>
      {weatherData.map((data, index) => (
        <div className="card mb-4 mt-5" key={index}>
          <div className="card-body d-inline ">
            <h5 className="card-title">{city}</h5>
            <h6 className="card-subtitle mb-2 text-muted" style={{fontWeight: 'bold', color: '#000'}}>
              {getNextThreeDays()[index]}
            </h6>
            <img
              src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
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