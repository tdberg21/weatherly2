import React from 'react';
import cleanSevenData from './cleanSevenData.js';
import { shallow } from 'enzyme';
import data from '../mock-data.js';


describe('Seven Hour Data Cleaner Test', () => {
  test('should return an array that contains only the data we need', () => {
    const expectedArray = [{ "hour": "1:00 PM", "img": "http://icons.wxug.com/i/c/k/partlycloudy.gif", "temp": "49" }, { "hour": "2:00 PM", "img": "http://icons.wxug.com/i/c/k/partlycloudy.gif", "temp": "49" }, { "hour": "3:00 PM", "img": "http://icons.wxug.com/i/c/k/clear.gif", "temp": "51" }, { "hour": "4:00 PM", "img": "http://icons.wxug.com/i/c/k/clear.gif", "temp": "50" }, { "hour": "5:00 PM", "img": "http://icons.wxug.com/i/c/k/clear.gif", "temp": "48" }, { "hour": "6:00 PM", "img": "http://icons.wxug.com/i/c/k/nt_clear.gif", "temp": "45" }, { "hour": "7:00 PM", "img": "http://icons.wxug.com/i/c/k/nt_clear.gif", "temp": "43" }];
    const actualArray = cleanSevenData(data);

    expect(actualArray).toEqual(expectedArray);
  });
});