import React from 'react';
import './Weather.css';

const Weather = (props) => {
  const { error, city, country, temperature, icon, description, minTemp, maxTemp, humidity } = props;
  
  return (
    <>
      {error ?
        <div className="error">
          {error}
        </div> : null 
      }

      <div className="location-box">
        <div className="location">
          { city && country && <p>{city}, {country}</p> }
        </div>
      </div>

      <div className="weather-box">
        {temperature ? 
          <div className="temperature">
            { <p>{Math.round(temperature)}&deg;C</p> }
          </div> : null
        }
        <div className="weather-icon">
          { icon && <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" /> }
        </div>
        <div className="weather-description">
          { description && <p>{description}</p> }
        </div>
      </div>

      <div className="additional-info">
        { minTemp && <p>Min temp: {Math.round(minTemp)}&deg;C</p> }
        { maxTemp && <p>Max temp: {Math.round(maxTemp)}&deg;C</p> }
        { humidity && <p>Humidity: {humidity}%</p> }
      </div>
    </>
  );
};

export default Weather;
