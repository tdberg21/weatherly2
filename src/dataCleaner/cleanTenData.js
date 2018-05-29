
const cleanTenDay = (fetchedData) => {
  let tenDayArray = [];
  fetchedData.forecast.simpleforecast.forecastday.forEach(day => {
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