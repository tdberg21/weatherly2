import React, { Component } from 'react';


class Search extends Component{ 
  constructor (props) {
    super(props);
    // this.state = {
    //   location: this.props.location || ''
    // }
  }

  render() {
    return(
      <div className="search-container">
        <input type='text' placeholder='Enter a City and State or a Zip Code.' onChange={(event) => {
          this.props.handleLocationUpdate(event);
        }}
        />
        <button className="submitButton" onClick={this.props.fetchData}>Submit</button>
      </div>
      )
  }
}


export default Search;