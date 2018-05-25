import React, { Component } from 'react';
import './App.css';
import Welcome from '../Welcome/Welcome.js';
import Search from '../Search/Search.js';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js';
import data from '../../mock-data';
import cleanData from '../../dataCleaner';
// import SevenHour from '../SevenHour/SevenHour.js';
// import TenDay from '../TenDay/TenDay.js'


class App extends Component {
  constructor() {
    super();
    this.state = {
      city: cleanData().city,
      state: cleanData().state,
      data: data
    }
  }


  render() {
    return (
      <div className="App">
        <Welcome />
        <Search />
        <CurrentWeather 
          city= {this.state.city}
          state= {this.state.state}
          currTemp= {data.current_observation.temp_f}
          highTemp= {data.forecast.txt_forecast.forecastday[0].high}
          lowTemp='51'
          currConditions= {cleanData().currConditions}  
          // img: {http://icons.wxug.com/i/c/k/mostlycloudy.gif} 
          conditionSummary={data.forecast.simpleforecast.forecastday[0].fcttext}
        />
      </div>
    );
  }
}

export default App;
