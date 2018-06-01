import React from 'react';
import './Card.css';

const Card = (props, index) => {
  if (props.dayName) {
  return (
      <div className="tenCard">
        <p className="dayName">{props.dayName}</p>
        <img src={props.image} alt="weather-icon"></img>
        <p> {props.high} &#8457; </p>
        <p> {props.low} &#8457; </p>
      </div>);
  } if (props.hour) {
      return (
        <div className="sevenCard">
        <p className="hour">{props.hour}</p>
        <img src={props.image} alt="weather-icon"></img>
        <p> {props.temp} &#8457; </p>
      </div>
      );
    };
};

export default Card;