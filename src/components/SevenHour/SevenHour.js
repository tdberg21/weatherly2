import React, { Component } from 'react';
import Card from '../Card/Card.js'
import './SevenHour.css'

class SevenHour extends Component {
  constructor(props) {
    super();
  };
  
  render() {
    return (
      <div className="sevenHour">
      { this.props.sevenHour.map((hour, index) => {
        return <Card className="sevenCard"
        hour={hour.hour}
        image={hour.img}
        temp={hour.temp}
        key={index}
        />
      })} 
      </div>
    )
  }
  
}

export default SevenHour;