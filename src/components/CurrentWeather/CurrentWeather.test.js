import React from 'react';
import CurrentWeather from './CurrentWeather.js'
import { shallow } from 'enzyme';

  describe('Current Weather Tests', () => {

    test('should display the right location', () => {
      const props = {
        location: 'Sterling, VA',
        city: 'Sterling',
        state: 'VA',
        currTemp: '70',
        highTemp: '80',
        lowTemp: '60',
        currConditions: 'cloudy',
        conditionSummary: 'cloudy'
      }
      const wrapper = shallow(<CurrentWeather 
        location={props.location}
        city={props.city}
        state={props.state}
        currTemp={props.currTemp}
        highTemp={props.highTemp}
        lowTemp={props.lowTemp}
        currConditions={props.currConditions}
        conditionSummary={props.conditionSummary} />);
      expect(wrapper.find('h3').text()).toEqual('Sterling, VA');
    })

    test('should display the correct current temperature', () => {
      const props = {
        location: 'Sterling, VA',
        city: 'Sterling',
        state: 'VA',
        currTemp: '70',
        highTemp: '80',
        lowTemp: '60',
        currConditions: 'cloudy',
        conditionSummary: 'cloudy'
      }

      console.log(props)
      const wrapper = shallow(<CurrentWeather
        location={props.location}
        city={props.city}
        state={props.state}
        currTemp={props.currTemp}
        highTemp={props.highTemp}
        lowTemp={props.lowTemp}
        currConditions={props.currConditions}
        conditionSummary={props.conditionSummary} />)
      expect(wrapper.find('.currentTemp').text()).toEqual(' 70 ℉');
    })

  test('should display the correct high and low temperature', () => {
      const props = {
        location: 'Sterling, VA',
        city: 'Sterling',
        state: 'VA',
        currTemp: '70',
        highTemp: '80',
        lowTemp: '60',
        currConditions: 'cloudy',
        conditionSummary: 'cloudy'
      }

      const wrapper = shallow(<CurrentWeather
        location={props.location}
        city={props.city}
        state={props.state}
        currTemp={props.currTemp}
        highTemp={props.highTemp}
        lowTemp={props.lowTemp}
        currConditions={props.currConditions}
        conditionSummary={props.conditionSummary} />)
      expect(wrapper.find('.highLowTemp').text()).toEqual('80℉  60℉');
    })

  test('should display the current conditions', () => {
      const props = {
        location: 'Sterling, VA',
        city: 'Sterling',
        state: 'VA',
        currTemp: '70',
        highTemp: '80',
        lowTemp: '60',
        currConditions: 'cloudy',
        conditionSummary: 'cloudy'
      }

      const wrapper = shallow(<CurrentWeather
        location={props.location}
        city={props.city}
        state={props.state}
        currTemp={props.currTemp}
        highTemp={props.highTemp}
        lowTemp={props.lowTemp}
        currConditions={props.currConditions}
        conditionSummary={props.conditionSummary} />)

      expect(wrapper.find('.currentConditions').text()).toEqual('cloudy')

  })
  });