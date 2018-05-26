import React, { Component } from 'react';
import Card from '../Card/Card.js'
import cleanTenData from '../../dataCleaner/cleanTenData.js'

// console.log(cleanTenData())

export default class TenDay extends Component {
  constructor() {
    super();
  };

  render() {
    return (
      <div>
      {cleanTenData().map(day => {
        return <Card 
          dayName = {day.day}
          image= {day.img}
          high = {day.high}
          low = {day.low}
        />
      })}
      </div>
    )
}};