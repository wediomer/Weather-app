import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchForm.css';

const SearchForm = ({ onCityChange, onSearchHistoryClick, searchHistory }) => {
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
    <div className="search-form-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter city..."
            value={city}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>

      {searchHistory.length > 0 && (
        <div className="search-history-wrapper">
          <h3>Search History</h3>
          <div>
            {searchHistory.map((previousCity) => (
              previousCity && (
                <button
                  key={previousCity}
                  className="btn btn-primary"
                  onClick={() => onSearchHistoryClick(previousCity)}
                >
                  {previousCity}
                </button>
              )
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchForm;
