import React, { Component } from 'react';
import Card from '../Card/Card.js'
import cleanTenData from '../../dataCleaner/cleanTenData.js'

class TenDay extends Component {
  constructor(props) {
    super();
  };

  render() {
    return (
      <div>
      {this.props.tenDay.map(day => {
        return <Card 
          dayName = {day.day}
          image= {day.img}
          high = {day.high}
          low = {day.low}
        />
      })}
      </div>
    )
}}

export default TenDay;