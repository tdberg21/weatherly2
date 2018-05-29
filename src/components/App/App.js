import React, { Component } from 'react';
import './App.css';
import Welcome from '../Welcome/Welcome.js';
import Search from '../Search/Search.js';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js';
import cleanData from '../../dataCleaner/dataCleaner.js';
import SevenHour from '../SevenHour/SevenHour.js';
import TenDay from '../TenDay/TenDay.js';
import cleanSevenData from '../../dataCleaner/cleanSevenData.js';
import cleanTenData from '../../dataCleaner/cleanTenData';
import apiKey from '../../apiKey.js'

class App extends Component {
  constructor() {

    super();
    this.fetchData.bind(this);
    this.state = {
      location: '',
      city: '',
      state: '',
      currentWeather: [],
      sevenHour: [],
      tenDay: []
    }
  }

  fetchData = () => {
    let locationInput = this.state.location
    let locationArray = locationInput.split(',');
    let city = locationArray[0];
    let state = locationArray[1];
      const url = `http://api.wunderground.com/api/${apiKey}/conditions/q/${state}/${city}.json`;
      const promise = fetch(url)
      .then(data => data.json())
      .then(parsedData =>
        this.setState({
          city: city,
          state: state,
          currentWeather: cleanData(parsedData),
          sevenHour: cleanSevenData(parsedData),
          tenDay: cleanTenData(parsedData)
        }))
      return promise;
    }

  render() {
    return (
      <div className="App">
        <Welcome />
        <Search />
        <input type='text' placeholder='Enter a city' onChange={(event) => {
          this.setState({
            location: event.target.value
          })
        }}
        />
        <button onClick={this.fetchData}>Submit</button>
        <CurrentWeather
          city={this.state.city}
          state={this.state.state}
          // currTemp={cleanData.currTemp}
          // highTemp={cleanData.highTemp}
          // lowTemp={cleanData.lowTemp}
          // currConditions={cleanData.currConditions}
          // conditionSummary={cleanData.conditionSummary}
        />
        <button onClick={() => {
          this.setState({
            sevenHour: cleanSevenData()
          })
        }}> Show Seven Hour Weather </button>
        <button onClick={() => {
          this.setState({
            tenDay: cleanTenData()
          })
        }}> Show Ten Day Weather </button>
        <TenDay
          tenDay={this.state.tenDay} />
        <SevenHour 
        sevenHour={this.state.sevenHour}/>
      </div>
    );
  }
}

export default App;