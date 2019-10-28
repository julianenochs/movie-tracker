import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';

describe('App', () => {
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
  const mockAddMovies = jest.fn();
  const mockUpdateError = jest.fn();
  const mockUpdateFavorites = jest.fn();
  const mockSelectMovie = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <App
        user={''}
        error={''}
        isLoggedIn={true}
        movies={mockMovies}
        favorites={''}
        selectMovieToDisplay={''}
        addMovies={mockAddMovies}
        updateError={mockUpdateError}
        updateFavorites={mockUpdateFavorites}
        selectMovie={mockSelectMovie}
      />
    );
  });

  it('should match the App Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
