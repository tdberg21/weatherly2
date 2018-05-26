import React from 'react';
import data from '../src/mock-data.js';


const cleanTenDay = (fetchedData) => {
  let tenHourArray = [];
  const tenHour = data.forecast.simpleforecast.forecastday.forEach(day => {
    tenHourArray.push({
      day: day.date.weekday,
      img: day.icon_url,
      high: day.high.fahrenheit,
      low: day.low.fahrenheit
    })
    return tenHourArray;
});
    return tenHourArray
}

export default cleanTenDay;