import React, { Component } from 'react';
import Welcome from '../Welcome/Welcome.js';
import Search from '../Search/Search.js';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js';
import cleanData from '../../dataCleaner/dataCleaner.js';
import SevenHour from '../SevenHour/SevenHour.js';
import TenDay from '../TenDay/TenDay.js';
import cleanSevenData from '../../dataCleaner/cleanSevenData.js';
import cleanTenData from '../../dataCleaner/cleanTenData';
import apiKey from '../../apiKey.js';
import './App.css';

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
  
  fetchData = (location) => {
    let locationArray = location.split(',');
    let city = locationArray[0];
    let state = locationArray[1];
    const url = `http://api.wunderground.com/api/${apiKey}/conditions/geolookup/hourly/forecast10day/q/${location}.json`;
    fetch(url)
    .then(data => data.json())
    .then(parsedData =>
      this.setState({
        location: location,
        city: city,
        state: state,
        currentWeather: cleanData(parsedData),
        sevenHour: cleanSevenData(parsedData),
        tenDay: cleanTenData(parsedData)
      }))
      .then(data => this.sendToLocalStorage())
      .catch(error => alert( 'This is not a valid location' ))
    }
    
    sendToLocalStorage() {
      let stringifiedWeather = JSON.stringify(this.state);
      localStorage.setItem('localWeather', stringifiedWeather);
    }
    
    getFromLocalStorage() {
      let localWeather = JSON.parse(localStorage.getItem('localWeather'));
      this.fetchData(localWeather.location);
    }
    
    componentDidMount() {
      if (localStorage.localWeather) {
        this.getFromLocalStorage();
      };
    };
    
    render() {
      if (!this.state.city) {
        return (
          <div>
          <Welcome />
          <Search fetchData={this.fetchData} />
          </div>
        )   
      } else {
        return (
          <div className="App">
          <Search fetchData={this.fetchData} />
          <CurrentWeather
          location={this.state.location}
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
    };
  };
  
  export default App;