import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import WeatherCard from './components/WeatherCard';
import SearchForm from './components/SearchForm';
// import PreviousSearch from './components/PreviousSearch';
import '../src/App.css'


const apiKey = '43e74d54eb2c61bb69001a1e3c4b7a15'; 
const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast';

const App = () => {
  const [city, setCity] = useState('');
  const [searchHistory, setSearchHistory] = useState(['']);
  const [error, setError] = useState('');


  

  
  const isValidCity = async (cityName) => {
    const trimmedCityName = cityName.trim();
    const url = `${apiUrl}?q=${trimmedCityName}&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      
      if (response.ok && data.cod === '200') {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('An error occurred while validating the city:', error);
      return false;
    }
  };

  const handleCityChange = async (newCity) => {
    if (await isValidCity(newCity)) {
      if (!searchHistory.includes(newCity)) {
        setCity(newCity);
        setSearchHistory([newCity, ...searchHistory]);
        setError('');
      }
    } else {
      setError('Invalid city name. Please enter a valid city.');
    }
  };
  const handleSearchHistoryClick = (selectedCity) => {

    setCity(selectedCity);
  };

  return (
    <div className="container">
  <div className="row justify-content-center">
    <div className="col-ms-3 col-lg-8"> 
      <SearchForm
        onCityChange={handleCityChange}
        onSearchHistoryClick={handleSearchHistoryClick}
        searchHistory={searchHistory}
      />
       
       {error && <div className="error-message">{error}</div>}
     
      <div>
        <WeatherCard city={city} />
      </div>
    </div>
  </div>
</div>

  
  );
};

export default App;
