import React from 'react';
import './CurrentWeather.css';

const CurrentWeather = ({location, city, state, currTemp, highTemp, lowTemp, currConditions, conditionSummary}) => {
  return(
    <div className="currentWeather">
    <h3>{location}</h3>
    <h2 className="currentCondition currentTemp"> {currTemp} &#8457;</h2>
    <h2 className="currentCondition"> {currConditions}</h2>
    <img src="http://icons.wxug.com/i/c/k/mostlycloudy.gif" alt="mostly cloudy icon" className="currentImg"></img>
    <p className="highLowTemp">{highTemp}&#8457;  {lowTemp}&#8457;</p>
    <p className="currentConditions">{conditionSummary}</p>
    </div>
  );
};

export default CurrentWeather;