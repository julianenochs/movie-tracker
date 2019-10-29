import * as actions from './index';

describe('actions', () => {
  let name;
  let email;
  let password;
  let boolean;
  let errorMessage;
  let userId;
  let favorites;
  let movie;
  let favoriteMovies;

  beforeEach(() => {
    name = 'Juju';
    email = 'jujube@email.com';
    password = 'password';
    errorMessage = 'yo das wrong'
    userId = 3;
    movie = ''
    favoriteMovies;
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

  it('should have a type of RESET_MOVIES', () => {
    const expectedAction = {
      type: 'RESET_MOVIES'
    }
    const result = actions.resetMovies();
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

  it('should have a type of UPDATE_IS_LOGGED_IN', () => {
    const expectedAction = {
      type: 'UPDATE_IS_LOGGED_IN',
      boolean
    }
    const result = actions.updateIsLoggedIn(boolean);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of UPDATE_ERROR', () => {
    const expectedAction = {
      type: 'UPDATE_ERROR',
      errorMessage
    }
    const result = actions.updateError(errorMessage);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of RESET_ERROR', () => {
    const expectedAction = {
      type: 'RESET_ERROR'
    }
    const result = actions.resetError();
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of UPDATE_USER', () => {
    const expectedAction = {
      type: 'UPDATE_USER',
      email,
      userId
    }
    const result = actions.updateUser(email, userId);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of RESET_USER', () => {
    const expectedAction = {
      type: 'RESET_USER'
    }
    const result = actions.resetUser();
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of UPDATE_FAVORITES', () => {
    const expectedAction = {
      type: 'UPDATE_FAVORITES',
      favorites
    }
    const result = actions.updateFavorites(favorites);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SELECT_MOVIE', () => {
    const expectedAction = {
      type: 'SELECT_MOVIE',
      movie
    }
    const result = actions.selectMovie(movie);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of DISPLAY_FAVORITES', () => {
    const expectedAction = {
      type: 'DISPLAY_FAVORITES',
      favoriteMovies
    }
    const result = actions.displayFavorites(favoriteMovies);
    expect(result).toEqual(expectedAction);
  });
});