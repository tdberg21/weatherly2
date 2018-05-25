import React, { Component } from 'react';

const CurrentWeather = ({city, state, currTemp, highTemp, lowTemp, currConditions, conditionSummary}) => {
    return(
      <div>
        <h2> You are in {city}, {state}</h2>
        <p>{currTemp} degrees</p>
        <p>{currConditions}</p>
        <img src="http://icons.wxug.com/i/c/k/mostlycloudy.gif" alt="mostly cloudy icon"></img>
        <p>High: {highTemp} degrees/ Low: {lowTemp} degrees</p>
        <p>{conditionSummary}</p>
      </div>
    )
  }

export default CurrentWeather;