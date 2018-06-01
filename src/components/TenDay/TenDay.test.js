import React from 'react';
import TenDay from './TenDay.js'
import { shallow } from 'enzyme';


describe('TenDay', () => {

  test('if there is a location, it should render ten cards', () => {
    const mockTenDayArray = [
      { day: "Thursday", img: "http://icons.wxug.com/i/c/k/clear.gif", high: "90", low: "58" }, { day: "Friday", img: "http://icons.wxug.com/i/c/k/partlycloudy.gif", high: "89", low: "53" }, { day: "Saturday", img: "http://icons.wxug.com/i/c/k/clear.gif", high: "79", low: "54" }, { day: "Sunday", img: "http://icons.wxug.com/i/c/k/mostlycloudy.gif", high: "81", low: "56" }, { day: "Monday", img: "http://icons.wxug.com/i/c/k/clear.gif", high: "90", low: "59" }, { day: "Tuesday", img: "http://icons.wxug.com/i/c/k/clear.gif", high: "93", low: "61" }, { day: "Wednesday", img: "http://icons.wxug.com/i/c/k/clear.gif", high: "93", low: "61" }, { day: "Thursday", img: "http://icons.wxug.com/i/c/k/partlycloudy.gif", high: "92", low: "61" }, { day: "Friday", img: "http://icons.wxug.com/i/c/k/partlycloudy.gif", high: "88", low: "61" }, { day: "Saturday", img: "http://icons.wxug.com/i/c/k/partlycloudy.gif", high: "85", low: "60" }
    ]
    const renderedTenDay = shallow(<TenDay tenDay={mockTenDayArray}/>, { disableLifecycleMethods: true })
    
    renderedTenDay.render();
    const expected = 10;
    const actual = renderedTenDay.find('Card').length;

    expect(actual).toBe(expected);
  });
});