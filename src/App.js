import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome.js'
import Search from './Search.js'
import CurrentWeather from './CurrentWeather.js'




class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
        <Search />
        <CurrentWeather 
        name='Denver'
        currTemp='79'
        highTemp='81'
        lowTemp='51'
        currConditions='Partly Cloudy'
        conditionSummary='It gonna rain'
        />
      </div>
    );
  }
}

export default App;
