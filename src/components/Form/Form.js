import React from 'react';
import './Form.css';

const Form = ({ getWeather, searchHandler, search }) => {
  return (
    <form className="search-box" onSubmit={getWeather}>
      <input 
        type="text"
        className="search-bar"
        value={search}
        onChange={searchHandler} 
        placeholder="Enter city name..." />
      <button className="search-btn" type="submit">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default Form;