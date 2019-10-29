import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from './MovieCard';

describe('Movie Card', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<MovieCard

    />)
  })
  it.skip('should match the snapshot with all of the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  });

})