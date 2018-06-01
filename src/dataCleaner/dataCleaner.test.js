import React from 'react';
import cleanData from './dataCleaner.js';
import { shallow } from 'enzyme';
import data from '../mock-data.js';


describe('Current Weather Data Cleaner Test', () => {
  test('should return an array that contains only the data we need', () => {
    const expectedObject = { "city": undefined, "conditionSummary": "Sun and clouds mixed. High 51F. Winds NE at 10 to 15 mph.", "currConditions": "Mostly Cloudy", "currTemp": 46, "highTemp": "51", "lowTemp": "32", "state": undefined };
    const actualObject = cleanData(data);

    expect(actualObject).toEqual(expectedObject);
  })
})