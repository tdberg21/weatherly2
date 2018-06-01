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

  test('if it has a prop of sevenCard, it should render sevenHour card', () => {
    const renderedSevenCard= shallow(<Card 
      hour='9:00am'
      image={cleanData(data).image}
      temp= '79'
      key={8} />)

    const actual = renderedSevenCard.find('.sevenCard');

    expect(actual).toHaveLength(1);
  })    
});