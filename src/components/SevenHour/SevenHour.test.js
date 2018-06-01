import React from 'react';
import SevenHour from './SevenHour.js'
import { shallow } from 'enzyme';

describe('Seven Hour', () => {

  test('if there is a location, it should render 7 cards', () => {
    let mockSevenHourArray = [{ hour: "12:00 PM", img: "http://icons.wxug.com/i/c/k/clear.gif", temp: "84.5" }, { hour: "1:00 PM", img: "http://icons.wxug.com/i/c/k/clear.gif", temp: "85.9" }, { hour: "2:00 PM", img: "http://icons.wxug.com/i/c/k/clear.gif", temp: "86.9" }, { hour: "3:00 PM", img: "http://icons.wxug.com/i/c/k/clear.gif", temp: "88.2" }, { hour: "4:00 PM", img: "http://icons.wxug.com/i/c/k/clear.gif", temp: "89.4" }, { hour: "5:00 PM", img: "http://icons.wxug.com/i/c/k/partlycloudy.gif", temp: "88.8" }, { hour: "6:00 PM", img: "http://icons.wxug.com/i/c/k/partlycloudy.gif", temp: "87.8" }];

    const renderedSevenHour = shallow(<SevenHour sevenHour={mockSevenHourArray} />, { disableLifecycleMethods: true })

    renderedSevenHour.render();
    const expected = 7;
    const actual = renderedSevenHour.find('Card').length;

    expect(actual).toBe(expected);
  });
});
 