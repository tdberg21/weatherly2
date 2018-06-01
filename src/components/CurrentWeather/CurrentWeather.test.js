import React from 'react';
import CurrentWeather from './CurrentWeather.js'
import { shallow } from 'enzyme';

  describe('Current Weather Tests', () => {

    test('should display the right location', () => {
      const props = {
        city: 'Sterling',
        state: 'VA',
        currTemp: '70',
        highTemp: '80',
        lowTemp: '60',
        currConditions: 'cloudy',
        conditionSummary: 'cloudy'
      }
      const wrapper = shallow(<CurrentWeather 
        city={props.city}
        state={props.state}
        currTemp={props.currTemp}
        highTemp={props.highTemp}
        lowTemp={props.lowTemp}
        currConditions={props.currConditions}
        conditionSummary={props.conditionSummary} />);
      expect(wrapper.find('h3').text()).toEqual('Sterling, VA');
    })
  });