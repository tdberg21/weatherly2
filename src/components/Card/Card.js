import React from 'react';
import './Card.css'

const Card = (props, index) => {
  return (
    <div>
      {
        props.dayName &&
        (<div className="tenCard ${index}">
          <p> {props.dayName} </p>
          <img src={props.image} alt="weather-icon"></img>
          <p> {props.high} &#8457; </p>
          <p> {props.low} &#8457; </p>
        </div>)
      }
      {
        props.hour &&
        (<div className="sevenCard">
          <p> {props.hour} </p>
          <img src={props.image} alt="weather-icon"></img>
          <p> {props.temp} &#8457; </p>
        </div>)
      }
      </div>
  )
}

export default Card;