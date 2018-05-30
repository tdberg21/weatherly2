import React, { Component } from 'react';


class Search extends Component{ 
  constructor (props) {
    super(props);
    // this.submitLocationToApp = this.submitLocationToApp.bind()
    this.state = { 
      location: ''
    };
  }

  updateLocation(event) {
    this.setState( { location: event.target.value })
  }

  // submitLocationToApp() {
  //   this.props.fetchData(this.state.location)
  // }

  render() {
    return(
      <div className="search-container">
        <input type='text' placeholder='Enter a City and State or a Zip Code.' onChange={(event) => {
          this.setState({
            location: event.target.value
          })
        }}
        />
        <button className="submitButton"onClick={this.fetchData}>Submit</button>
      </div>
      )
  }
}


export default Search;