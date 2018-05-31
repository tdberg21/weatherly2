import React, { Component } from 'react';


class Search extends Component{ 
  constructor (props) {
    super(props);
    this.submitLocationToApp = this.submitLocationToApp.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.state = { 
      location: ''
    };
  }

  updateLocation(event) {
    this.setState( { location: event.target.value })
  }

  submitLocationToApp() {
    console.log(this)
    this.props.fetchData(this.state.location)
    this.setState({
      location: ''
    })
  }

  render() {
    return(
      <div className="search-container">
        <input type='text' placeholder='Enter a City and State or a Zip Code.' onChange={this.updateLocation}
        />
        <button className="submitButton"onClick={this.submitLocationToApp}>Submit</button>
      </div>
      )
  }
}


export default Search;