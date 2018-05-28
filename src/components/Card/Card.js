import React, { Component } from 'react';
import Card from '../Card/Card.js'
import cleanSevenData from '../../dataCleaner/cleanSevenData.js'


class SevenHour extends Component {
  constructor(props) {
    super();
  };

  render() {
    return (
      <div>
        {this.props.sevenHour.map(hour => {
          // return <Card
          //   hour={hour.hour}
          //   image={hour.img}
          //   temp={hour.temp}
          // />
        })}
      </div>
    )
  }
  
}

export default SevenHour;