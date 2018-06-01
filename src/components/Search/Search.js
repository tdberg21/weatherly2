import React, { Component } from 'react';
// import Trie from '@tdberg21/complete-me';
// import data from './city-data.js';

// const trie = new Trie();
// trie.populate(data);

class Search extends Component { 
  constructor (props) {
    super(props);
    this.submitLocationToApp = this.submitLocationToApp.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.state = { 
      location: ''
    };
  };
  
  updateLocation(event) {
    this.setState( { location: event.target.value } );
  }
  
  submitLocationToApp() {
    this.props.fetchData(this.state.location);
    this.setState({
      location: ''
    });
  };

  // citySuggestion() {
  //   trie.suggest(this.state.location);
  //   return trie.suggestionArray.map(city => {
  //    return <options> {city} </options>
  //   });
  // };
  
  render() {
    return(
      <div className="search-container">
      <input type='text' list='cities' placeholder='Enter a City and State or a Zip Code.' onChange={this.updateLocation}
      />
      {/* <datalist id='cities'> {this.citySuggestion()}</datalist> */}
      <button className="submitButton"onClick={this.submitLocationToApp}>Submit</button>
      </div>
    );
  };
};

export default Search;