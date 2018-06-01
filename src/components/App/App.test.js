import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
global.localStorage = {
  setItem: () => {},
  getItem: () => {}
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App default state', () => {
  
  test('should have a default city of an empty string', () => {
    const renderedApp = shallow(<App />);
    
    const expectedCity = '';
    const actualCity = renderedApp.state('city');
    
    expect(actualCity).toEqual(expectedCity);
  })
  
  test('should have a default state of an empty string', () => {
    const renderedApp = shallow(<App />);
    
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
    const renderedApp = shallow(<App />);
    
    const expectedTenDay = [];
    const actualTenDay = renderedApp.state('tenDay');
    
    expect(actualTenDay).toEqual(expectedTenDay);
  })
});

describe('App Tests', () => {
  test('if there is no location, it should render the welcome component', () => {
    const renderedApp = shallow(<App />, { disableLifecycleMethods: true });
    const mockState = {
      location: '',
      city: '',
      state: '',
      currentWeather: [],
      sevenHour: [],
      tenDay: []
    };
    renderedApp.setState(mockState);
    renderedApp.render();
    const expectedState = 1;
    const actualState = renderedApp.find('Welcome').length;

    expect(actualState).toBe(expectedState);
  });

  test('if there is a location, it should render the current weather', () => {
    const renderedApp = shallow(<App />, { disableLifecycleMethods: true });
    const mockState = {
      location: 'Sterling, VA',
      city: 'Sterling',
      state: 'VA',
    };
    renderedApp.setState(mockState);
    renderedApp.render();
    const expectedState = 1;
    const actualState = renderedApp.find('CurrentWeather').length;

    expect(actualState).toBe(expectedState);
  });
})

