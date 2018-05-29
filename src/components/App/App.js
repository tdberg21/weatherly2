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

class App extends Component {
  constructor() {

    super();
    this.fetchData.bind(this);
    this.state = {
      location: '',
      sevenHour: [],
      tenDay: []
    }
  }

  fetchData = () => {
    let locationArray = this.state.location.split(',');
    let city = locationArray[0];
    let state = locationArray[1];
    console.log(city, state);
    function fetchData(state, city) {
      const url = `http://api.wunderground.com/api//conditions/q/${state}/${city}.json`;
      const promise = fetch(url)
        .then(data => data.json());
      return promise;
    }
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
          city={cleanData.city}
          state={cleanData.state}
          currTemp={cleanData.currTemp}
          highTemp={cleanData.highTemp}
          lowTemp={cleanData.lowTemp}
          currConditions={cleanData.currConditions}
          conditionSummary={cleanData.conditionSummary}
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