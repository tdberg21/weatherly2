import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';
import data from '../../mock-data.js'
import cleanData from '../../dataCleaner/dataCleaner.js'


describe('Card Tests', () => {
  test('if it has a prop of dayName, it should render tenDay card', () => {
    const renderedTenCard = shallow(<Card 
      dayName='Tuesday'
      image={cleanData(data).image}
      high= '79'
      low= '54'
      key={8} />)

    const actual = renderedTenCard.find('.tenCard');

    expect(actual).toHaveLength(1);
  });
});