import React, { useState } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Weather from './components/Weather/Weather';
import './App.css';

const App = () => {
  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState({});

  const API_KEY = '9f51cf51d9fdb252706691f56459f2cd';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${API_KEY}`;

  const getWeather = async (e) => {
    e.preventDefault();

    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);

    if (data.name) {
      setWeather({
        data: data,
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        temperature: data.main.temp,
        minTemp: data.main.temp_min,
        maxTemp: data.main.temp_max,
        humidity: data.main.humidity,
        icon: data.weather[0].icon,
        cod: '',
        error: ''
      });
    } else if (data.cod === '404') {
      setWeather({...data, error: 'City not found'});
    } else {
      setWeather({...data, error: 'Please enter a city name'});
    }

    setSearch('');
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <Header />
      <Form getWeather={getWeather} searchHandler={searchHandler} search={search} />
      <Weather {...weather} />
    </div>
  );
};

export default App;
