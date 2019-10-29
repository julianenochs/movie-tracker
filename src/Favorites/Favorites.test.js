import React from 'react';
import { shallow } from 'enzyme';
import { Favorites, mapStateToProps, mapDispatchToProps } from './Favorites';

describe('Favorites', () => {
  let wrapper;
  const mockMovies = [
    {
      popularity: 471.315,
      vote_count: 4211,
      video: false,
      poster_path: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
      id: 475557,
      adult: false,
      backdrop_path: '/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg',
      original_language: 'en',
      original_title: 'Joker',
      title: 'Joker',
      vote_average: 8.6,
      overview:
        'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.',
      release_date: '2019-10-04',
      isFavorite: false
    }
  ];

  beforeEach(() => {
    wrapper = shallow(<Favorites favorites={[]} movies={mockMovies} />);
  });

  it('should match the Favorites Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
