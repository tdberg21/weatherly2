import React from 'react';
import data from '../../src/mock-data'
// import fetchData from '../src/apiCalls.js'

// const fetchedData = (state, city) => fetchData(state, city);

const cleanData = (fetchedData) => {
 let cleanObj = {
    city: data.current_observation.display_location.city,
    state: data.current_observation.display_location.state,
    currTemp: data.current_observation.temp_f,
    highTemp: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    lowTemp: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    currConditions: data.current_observation.weather,
    conditionSummary: data.forecast.txt_forecast.forecastday[0].fcttext
  }

  return cleanObj
}

export default cleanData;

