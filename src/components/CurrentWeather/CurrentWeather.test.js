import React from 'react';
import CurrentWeather from './CurrentWeather.js'
import { shallow } from 'enzyme';

  describe('Current Weather Unit Tests', () => {
    test('should return true', () => {
      const expected = true;
      const actual = true;

      expect(actual).toEqual(expected);
    });

    test('it should render with the correct props', () => {
      const expectedCurrentWeather = {
        city: 'Sterling',
        state: 'VA',
        currTemp: '69',
        highTemp: '69',
        lowTemp: '69',
        currConditions: 'bitchin',
        conditionSummary: 'bitchinnnnnn'
      }
      const renderedCurrentWeather = shallow(<CurrentWeather city='Sterling'
        state= 'VA'
        currTemp= '69'
        highTemp= '69'
        lowTemp= '69'
        currConditions= 'bitchin'
        conditionSummary= 'cloudy'/>);
      console.log(renderedCurrentWeather.props);
      const actualCurrentWeather = renderedCurrentWeather.find('props');
      expect(actualCurrentWeather).toEqual(expectedCurrentWeather);
    })
  });