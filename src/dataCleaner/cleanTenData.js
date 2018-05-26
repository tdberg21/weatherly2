import React from 'react';
import data from '../../src/mock-data.js';


const cleanTenDay = (fetchedData) => {
  let tenDayArray = [];
  const tenDay = data.forecast.simpleforecast.forecastday.forEach(day => {
    tenDayArray.push({
      day: day.date.weekday,
      img: day.icon_url,
      high: day.high.fahrenheit,
      low: day.low.fahrenheit
    })
    return tenDayArray;
});
    return tenDayArray
}

export default cleanTenDay;