import React, { Component } from 'react';
import './App.css';
import Welcome from '../Welcome/Welcome.js';
import Search from '../Search/Search.js';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js';
import data from '../../mock-data';
import cleanData from '../../dataCleaner/dataCleaner.js';
// import SevenHour from '../SevenHour/SevenHour.js';
import TenDay from '../TenDay/TenDay.js'
import cleanSevenData from '../../dataCleaner/cleanSevenData.js'

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
          highTemp= {cleanData().highTemp}
          lowTemp= {cleanData().lowTemp}
          currConditions= {cleanData().currConditions}  
          // img: {http://icons.wxug.com/i/c/k/mostlycloudy.gif} 
          conditionSummary={cleanData().conditionSummary}
        />
        <TenDay />
      </div>
    );
  }
}

export default App;