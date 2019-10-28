import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';

describe('App', () => {
  let wrapper;
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
        movies={[]}
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
