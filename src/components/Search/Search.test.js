import React from 'react';
// import App from './App';
import Search from './Search.js'
import { shallow } from 'enzyme';

describe('Search unit test', () => {
  test('should have a default location of an empty string', () => {
    const renderedSearch = shallow(<Search />)

    const expectedLocation = '';
    const actualLocation = renderedSearch.state('location');

    expect(actualLocation).toBe(expectedLocation);
  })

  test('when update location is invoked, state should update accordingly', () => {
    const mockEvent = { target: { value:'Portland' } };
    const renderSearch = shallow(<Search />)

    renderSearch.instance().updateLocation(mockEvent)

    const expectedLocation = 'Portland';
    const actualLocation = renderSearch.state('location');

    expect(actualLocation).toBe(expectedLocation);
  })

  test('when submit location to app is invoked the prop function is invoked with the correct arguments and state is reset to an empty string', () => {

    const mockSubmitLocation = jest.fn() 

    const renderSearch = shallow(<Search 
      submitLocation = { mockSubmitLocation }/>)
    const expectedArguments = 'Portland';
    
    renderSearch.setState({ location: 'Portland' })
    renderSearch.instance().submitLocationToApp({preventDefault: jest.fn()})


    expect(submitLocationToApp).toHaveBeenCalledWith(expectedArguments)
  })


})

//test that location has a default of an empty string

//test that fetchcall is executed

//are we getting the right props from app

//check to make sure that the form is rendered