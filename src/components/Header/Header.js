import React from 'react';
import './Header.css';

const Header = () => {
  const dateBuilder = (d) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className="header">
      <h1>Weather App</h1>
      <div className="date">
        <p>{dateBuilder(new Date())}</p>
      </div>
    </div>
  );
};

export default Header;