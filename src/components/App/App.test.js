import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App default state', () => {
  test('should have a default location of an empty string', () => {
    const renderedApp = shallow(<App />)
    
    const expectedLocation = '';
    const actualLocation = renderedApp.state('location');
    
    expect(actualLocation).toEqual(expectedLocation);
  })
  
  test('should have a default city of an empty string', () => {
    const renderedApp = shallow(<App />)
    
    const expectedCity = '';
    const actualCity = renderedApp.state('city');
    
    expect(actualCity).toEqual(expectedCity);
  })
  
  test('should have a default state of an empty string', () => {
    const renderedApp = shallow(<App />)
    
    const expectedState = '';
    const actualState = renderedApp.state('state');
    
    expect(actualState).toEqual(expectedState);
  })
  
  test('should have a current weather of an empy array', () => {
    const renderedApp = shallow(<App />)
    
    const expectedCurrentWeather = [];
    const actualCurrentWeather = renderedApp.state('currentWeather');
    
    expect(actualCurrentWeather).toEqual(expectedCurrentWeather);
  })
  
  test('should have a sevenHour of an empty array', () => {
    const renderedApp = shallow(<App />)
    
    const expectedSevenHour = [];
    const actualSevenHour = renderedApp.state('sevenHour');
    
    expect(actualSevenHour).toEqual(expectedSevenHour);
  })
  
  test('should have a tenDay of an empty Array', () => {
    const renderedApp = shallow(<App />)
    
    const expectedTenDay = [];
    const actualTenDay = renderedApp.state('tenDay');
    
    expect(actualTenDay).toEqual(expectedTenDay);
  })
});

