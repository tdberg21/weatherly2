import React from 'react';
import './CurrentWeather.css';


const CurrentWeather = ({city, state, currTemp, highTemp, lowTemp, currConditions, conditionSummary}) => {
    return(
      <div className="currentWeather">
        <h3> {city}, {state}</h3>
        <h2> {currTemp} &#8457;</h2>
        <h2> {currConditions}</h2>
        <img src="http://icons.wxug.com/i/c/k/mostlycloudy.gif" alt="mostly cloudy icon"></img>
        <p> {highTemp} &#8457; &nbsp;&nbsp; {lowTemp} &#8457;</p>
        <p>{conditionSummary}</p>
      </div>
    )
  }

export default CurrentWeather;