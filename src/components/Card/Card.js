import React from 'react';

const Card = (props) => {
  console.log(props)
  return (
    <div>
      {
        props.dayName &&
        (<div>
          <p> day: {props.dayName} </p>
          <img src={props.image} alt="weather-icon"></img>
          <p> high: {props.high} </p>
          <p> low: {props.low} </p>
        </div>)
      }
      {
        props.hour &&
        (<div>
          <p> hour: {props.hour} </p>
          <img src={props.image} alt="weather-icon"></img>
          <p> temp: {props.temp} </p>
        </div>)
      }
      </div>

  )
}



export default Card;