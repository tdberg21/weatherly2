import React, { Component } from 'react';

const CurrentWeather = ({name, currTemp, highTemp, lowTemp, currConditions, conditionSummary}) => {
    return(
      <div>
        <h2> You are in {name}</h2>
        <p>{currTemp} degrees</p>
        <p>{currConditions}</p>
        <p>High: {highTemp} degrees/ Low: {lowTemp} degrees</p>
        <p>{conditionSummary}</p>
      </div>
    )
  }



export default CurrentWeather;