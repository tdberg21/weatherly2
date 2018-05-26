import React from 'react';

const Card = (props) => {
  return (
    <div>
      <p> day: {props.dayName} </p>
      <img src={props.img} alt="weather-icon"></img>
      <p> high: {props.high} </p>
      <p> low: {props.low} </p>
    </div>
    )
}

export default Card;