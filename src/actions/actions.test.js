import * as actions from './index';

describe('actions', () => {
  let name;
  let email;
  let password;
  beforeEach(() => {
    name = 'Juju';
    email = 'jujube@email.com';
    password = 'password';
  });

  it('should have a type of ADD_MOVIES', () => {
    const movies = []
    const expectedAction = {
      type: 'ADD_MOVIES',
      movies
    }
    const result = actions.addMovies(movies);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of UPDATE_USER_INFO', () => {
    const expectedAction = {
      type: 'UPDATE_USER_INFO',
      name,
      email,
      password
    }
    const result = actions.updateUserInfo(name, email, password);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of RESET_MOVIES', () => {
    const expectedAction = { type: 'RESET_MOVIES' };
    const result = actions.resetMovies();
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of UPDATE_IS_LOGGED_IN', () => {
    const expectedAction = {
      type: 'UPDATE_IS_LOGGED_IN',
      boolean: true,
    };
    const result = actions.updateIsLoggedIn(true);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of UPDATE_ERROR', () => {
    const expectedAction = {
      type: 'UPDATE_ERROR',
      errorMessage: 'Error',
    }
    const result = actions.updateError('Error');
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of RESET_ERROR', () => {
    const expectedAction = { type: 'RESET_ERROR' };
    const result = actions.resetError();
    expect(result).toEqual(expectedAction);
  });  

  it('should have a type of UPDATE_USER', () => {
    const expectedAction = {
      type: 'UPDATE_USER',
      email,
      userId: 10, 
    };
    const result = actions.updateUser(email, 10);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of RESET_USER', () => {
    const expectedAction = { type: 'RESET_USER' };
    const result = actions.resetUser();
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of UPDATE_FAVORITES', () => {
    const mockFavorites = [
        {id: 343243, title: 'A movie', poster_path:'/posterpath', vote_average: 9.9},
        {id: 111111, title: 'A movie 2', poster_path:'/posterpath2', vote_average: 1},
      ]
    const expectedAction = {
      type: 'UPDATE_FAVORITES',
      favorites: mockFavorites,
    }

    const result = actions.updateFavorites(mockFavorites);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of UPDATE_FAVORITES', () => {
    const movie = {id: 102931, title: 'Great Movie', overview:'this is the overview', isFavorite: false };
    const expectedAction = {
      type: 'SELECT_MOVIE',
      movie,
    };
    const result = actions.selectMovie(movie);
    expect(result).toEqual(expectedAction);
  });
});

