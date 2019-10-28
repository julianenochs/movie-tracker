import React from 'react';
import { shallow } from 'enzyme';
import { MovieInfo, mapStateToProps, mapDispatchToProps } from './MovieInfo';

describe('MovieInfo', () => {
  let wrapper;
  const mockSelectMovieToDisplay = jest.fn();
  const mockSelectMovie = [
    {
      title: 'Peerat Test Movie',
      release_date: '12/25/2019',
      vote_average: 10
    }
  ];

  it('should match the MovieInfo Snapshot', () => {
    wrapper = shallow(
      <MovieInfo
        selectMovie={mockSelectMovie}
        selectMovieToDisplay={mockSelectMovieToDisplay}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
