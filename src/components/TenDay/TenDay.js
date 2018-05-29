import React, { Component } from 'react';
import Card from '../Card/Card.js'
// import cleanTenData from '../../dataCleaner/cleanTenData.js'

class TenDay extends Component {
  constructor(props) {
    super();
  };

  render() {
    return (
      <div>
        {this.props.tenDay.map((day, index) => {
          return <Card
            dayName={day.day}
            image={day.img}
            high={day.high}
            low={day.low}
            key={index}
          />
        })}
      </div>
    )
  }
}

export default TenDay;