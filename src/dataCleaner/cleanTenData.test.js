import React from 'react';
import cleanTenData from './cleanTenData.js';
import { shallow } from 'enzyme';
import data from '../mock-data.js';


describe('Ten Day Data Cleaner Test', () => {
  test('should return an array that contains only the data we need', () => {
    const expectedArray = [{ "day": "Wednesday", "high": "51", "img": "http://icons.wxug.com/i/c/k/partlycloudy.gif", "low": "32" }, { "day": "Thursday", "high": "55", "img": "http://icons.wxug.com/i/c/k/clear.gif", "low": "51" }, { "day": "Friday", "high": "57", "img": "http://icons.wxug.com/i/c/k/chancerain.gif", "low": "44" }, { "day": "Saturday", "high": "47", "img": "http://icons.wxug.com/i/c/k/rain.gif", "low": "30" }, { "day": "Sunday", "high": "37", "img": "http://icons.wxug.com/i/c/k/cloudy.gif", "low": "22" }, { "day": "Monday", "high": "35", "img": "http://icons.wxug.com/i/c/k/clear.gif", "low": "19" }, { "day": "Tuesday", "high": "32", "img": "http://icons.wxug.com/i/c/k/partlycloudy.gif", "low": "20" }, { "day": "Wednesday", "high": "33", "img": "http://icons.wxug.com/i/c/k/partlycloudy.gif", "low": "26" }, { "day": "Thursday", "high": "35", "img": "http://icons.wxug.com/i/c/k/snow.gif", "low": "23" }, { "day": "Friday", "high": "31", "img": "http://icons.wxug.com/i/c/k/partlycloudy.gif", "low": "18" }];
    const actualArray = cleanTenData(data);

    expect(actualArray).toEqual(expectedArray);
  })
})