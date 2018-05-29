// import data from '../../src/mock-data'
// import fetchData from '../src/apiCalls.js'

// const fetchedData = (state, city) => fetchData(state, city);

const cleanData = (fetchedData) => {
 let cleanObj = {
    city: fetchedData.current_observation.city,
    state: fetchedData.current_observation.state,
    currTemp: fetchedData.current_observation.temp_f,
    highTemp: fetchedData.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    lowTemp: fetchedData.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    currConditions: fetchedData.current_observation.weather,
    conditionSummary: fetchedData.forecast.txt_forecast.forecastday[0].fcttext
  }

  return cleanObj
}

// let cleanData = dataCleaner();

export default cleanData;

