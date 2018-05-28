import React, { Component } from 'react';
import './App.css';
import Welcome from '../Welcome/Welcome.js';
import Search from '../Search/Search.js';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js';
import data from '../../mock-data';
import cleanData from '../../dataCleaner/dataCleaner.js';
import SevenHour from '../SevenHour/SevenHour.js';
import TenDay from '../TenDay/TenDay.js';
import cleanSevenData from '../../dataCleaner/cleanSevenData.js';
import cleanTenData from '../../dataCleaner/cleanTenData';

class App extends Component {
  constructor() {
    super();
    this.searchButton.bind(this);
    this.state = {
      location: '',
      data: data,
      sevenHour: [],
      tenDay: []
    }
  }

  searchButton = () => {
    console.log(this.state.location);
  }

  render() {
    return (
      <div className="App">
        <Welcome />
        <Search />
        <input type='text' placeholder='Enter a city' onChange={(event) => {this.setState({
            location: event.target.value})}}
          />
        <button onClick={this.searchButton}>Submit</button> 
        <CurrentWeather 
          city={cleanData().city}
          state={cleanData().state}
          currTemp= {data.current_observation.temp_f}
          highTemp= {cleanData().highTemp}
          lowTemp= {cleanData().lowTemp}
          currConditions= {cleanData().currConditions}  
          // img: {http://icons.wxug.com/i/c/k/mostlycloudy.gif} 
          conditionSummary={cleanData().conditionSummary}
        />
        <button onClick= {() => {
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
        tenDay={this.state.tenDay}/>
        {/* <SevenHour 
        sevenHour={this.state.sevenHour}/> */}
      </div>
    );
  }
}

export default App;