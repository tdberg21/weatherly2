import React, { Component } from 'react';
import Welcome from '../Welcome/Welcome.js';
import Search from '../Search/Search.js';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js';
import cleanData from '../../dataCleaner/dataCleaner.js';
import SevenHour from '../SevenHour/SevenHour.js';
import TenDay from '../TenDay/TenDay.js';
import cleanSevenData from '../../dataCleaner/cleanSevenData.js';
import cleanTenData from '../../dataCleaner/cleanTenData';
import apiKey from '../../apiKey.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.fetchData.bind(this);
    // this.splitLocation.bind(this);
    this.state = {
      location: '',
      city: '',
      state: '',
      currentWeather: [],
      sevenHour: [],
      tenDay: []
    }
  }

  // splitLocation() {
  //   let locationInput = this.state.location
  //   let locationArray = locationInput.split(',');
  //   let city = locationArray[0];
  //   let state = locationArray[1];
  //   this.fetchData(city, state)
  // }
  
  fetchData = () => {
    let locationInput = this.state.location
    let locationArray = locationInput.split(',');
    let city = locationArray[0];
    let state = locationArray[1];
    const url = `http://api.wunderground.com/api/${apiKey}/conditions/geolookup/hourly/forecast10day/q/${state}/${city}.json`;
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
      .then(data => this.sendToLocalStorage())
      return promise;
    }

    sendToLocalStorage() {
      let stringifiedWeather = JSON.stringify(this.state);
      localStorage.setItem('localWeather', stringifiedWeather);
    }
    
    getFromLocalStorage() {
      
      let localWeather = JSON.parse(localStorage.getItem('localWeather'));
      this.setState({
        city: localWeather.city,
        state: localWeather.state,
        currentWeather: localWeather.currentWeather,
        sevenHour: localWeather.sevenHour,
        tenDay: localWeather.tenDay
      })
    }

    componentDidMount() {
      if (localStorage.length > 0) {
        this.getFromLocalStorage();
      }
    }

  render() {
    if (this.state.city === '') {
      return (
        <div>
          <Welcome />
          <div className="search-container">
            <input type='text' placeholder='Enter a City and State or a Zip Code' onChange={(event) => {
            this.setState({
              location: event.target.value
            })
          }}
          />
          <button className="submitButton" onClick={this.fetchData}>Submit </button>
          </div>
        </div>
      )   
    } else {
      return (
      <div className="App">
        <Search />
        <input type='text' placeholder='Enter a City and State or a Zip Code.' onChange={(event) => {
          this.setState({
            location: event.target.value
          })
        }}
        />
        <button className="submitButton" onClick={this.fetchData}>Submit</button>
        <CurrentWeather
          city={this.state.city}
          state={this.state.state}
          currTemp={this.state.currentWeather.currTemp}
          highTemp={this.state.currentWeather.highTemp}
          lowTemp={this.state.currentWeather.lowTemp}
          currConditions={this.state.currentWeather.currConditions}
          conditionSummary={this.state.currentWeather.conditionSummary}
        />
        <div className="cardContainer">
          <TenDay 
            tenDay={this.state.tenDay} />
          <SevenHour 
          sevenHour={this.state.sevenHour}/>
        </div>
      </div>
    );
    }
  }
}

export default App;