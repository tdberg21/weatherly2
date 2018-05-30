
const cleanSevenData = (fetchedData) => {
console.log(fetchedData)
  let hourlyArray = fetchedData.hourly_forecast.splice(1, 7);
  let sevenHourArray = [];
  hourlyArray.forEach(hour => {
    sevenHourArray.push({
      hour: hour.FCTTIME.civil,
      img: hour.icon_url,
      temp: hour.temp.english
    })
    return sevenHourArray;
  });
  return sevenHourArray
}

export default cleanSevenData;