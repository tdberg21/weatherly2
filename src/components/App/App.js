import React, { Component } from 'react';
import './App.css';
import Welcome from '../Welcome/Welcome.js';
import Search from '../Search/Search.js';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js';
import data from '../../mock-data';
// import SevenHour from '../SevenHour/SevenHour.js';
// import TenDay from '../TenDay/TenDay.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
        <Search />
        <CurrentWeather 
          city= { data.current_observation.display_location.city }
          state= { data.current_observation.display_location.state }
          currTemp= { data.current_observation.temp_f }
          highTemp= { data.forecast.simpleforecast.forecastday.highTemp }
          lowTemp='51'
          currConditions= { data.current_observation.weather }
          conditionSummary='It gonna rain'
        />
      </div>
    );
  }
}

export default App;
