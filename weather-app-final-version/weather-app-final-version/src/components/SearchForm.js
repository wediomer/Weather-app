import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchForm = ({ onCityChange, onSearchHistoryClick, searchHistory, weatherData, setWeatherData }) => {
  const [city, setCity] = useState('');

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCityChange(city);
    setCity('');
  };

  return (
    <div>
      <div>
        <div>
          {weatherData && (
            <div className="result">
              {/* {getImage()} */}
            </div>
          )}
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control mt-5"
            placeholder="Enter city..."
            value={city}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="btn btn-primary mt-5">
            Search
          </button>
        </div>
      </form>

      <div>
        <div>
          <h3>Search History</h3>
          {searchHistory.map((previousCity) => (
            previousCity && ( // Add a conditional check
              <button
                key={previousCity}
                className="btn btn-primary mb-2"
                onClick={() => onSearchHistoryClick(previousCity)}
              >
                {previousCity}
              </button>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
