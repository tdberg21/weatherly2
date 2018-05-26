import React, { Component } from 'react';
import Card from '../Card/Card.js'
import cleanTenDay from '../../dataCleaner.js'

console.log(cleanTenDay())

class TenDay extends Component {
  constructor() {
    super();
  };

  render() {
    return (
      <div>
      <Card 
        dayName = {cleanTenDay().day}
        high = {cleanTenDay().high}
        low = {cleanTenDay().low}
      />
      </div>
      )
  }
}

export default TenDay;