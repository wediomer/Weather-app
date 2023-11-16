import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PreviousSearch = ({ previousSearches, onSearchHistoryClick }) => {
  useEffect(() => {
    
    localStorage.setItem('previousSearches', JSON.stringify(previousSearches));
  }, [previousSearches]);

  const handleButtonClick = (previousCity) => {
    onSearchHistoryClick(previousCity);
  };

  const storedPreviousSearches = JSON.parse(localStorage.getItem('previousSearches')) || [];

  return (
    <div className="previous-search">
      <h3>Previous Searches:</h3>
      <div>
        <>
          {storedPreviousSearches.map((previousCity, index) => (
            previousCity && ( // Add a conditional check
              <div key={index}>
                <button
                  className="btn btn-outline-secondary mb-2"
                  onClick={() => handleButtonClick(previousCity)}
                >
                  {previousCity}
                </button>
              </div>
            )
          ))}
        </>
      </div>
    </div>
  );
};

export default PreviousSearch;
