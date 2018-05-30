import React from 'react';
import apiKey from './src/apiKey.js'


function fetchData(state, city) {
  const url = `http://api.wunderground.com/api/${apiKey}/conditions/q/${state}/${city}.json`;
    const promise = fetch(url)  
                    .then(data => data.json());

    return promise;
}

export default fetchData;

// const data = fetch('http://api.wunderground.com/api/${apiKey}/conditions/q/${searchState}/${searchCity}.json')
//   .then(data => data.json())
//   .then(data => console.log(data))
//   .catch(err => console.log('data error'))