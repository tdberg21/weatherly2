import React from 'react';
import data from '../../src/mock-data.js';


const cleanSevenData = (fetchedData) => {
  let hourlyArray = data.hourly_forecast.splice(1, 7);
  let sevenHourArray = [];
  const sevenHour = hourlyArray.forEach(hour => {
    sevenHourArray.push({
      hour: hour.FCTTIME.civil,
      img: hour.icon_url,
      temp: hour.temp.english
    })
    return sevenHourArray;
  });
  return sevenHourArray
}

const cleanSevenHourArray= cleanSevenData()

export default cleanSevenData;