import React from 'react';
import data from '../src/mock-data'

const cleanData = () => {
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

console.log(cleanData());

export default cleanData;