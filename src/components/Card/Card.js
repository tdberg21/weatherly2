import React from 'react';
import './Card.css'

const Card = (props) => {
  return (
    <div>
      {
        props.dayName &&
        (<div className="tenCard">
          <p> {props.dayName} </p>
          <img src={props.image} alt="weather-icon"></img>
          <p> high: {props.high} </p>
          <p> low: {props.low} </p>
        </div>)
      }
      {
        props.hour &&
        (<div className="sevenCard">
          <p> {props.hour} </p>
          <img src={props.image} alt="weather-icon"></img>
          <p> temp: {props.temp} </p>
        </div>)
      }
      </div>
  )
}

export default Card;