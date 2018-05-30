import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import Adapter from 'enzyme - adapter - react - 16';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App default state', () => {
  it('should have a default location of an empty string', () => {
    // renderedApp = shallow(<App />)

    const expectedLocation = '';
    const actualLocation = renderedApp.state('location');

    expect(actualLocation).toEqual(expectedLocation);
    })
});

