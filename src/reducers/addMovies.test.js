import * as actions from '../actions/index';
import { movies } from './addMovies';

describe('movies', () => {
  let mockMovies;

  beforeEach(() => {
    mockMovies = [
      {id: 123233, title: 'Movie 1', overview:'this movie is great', isFavorite : true},
      {id: 111111, title: 'Movie 2', overview:'this movie is not great', isFavorite : false},
      {id: 123213, title: 'Movie 3', overview:'this movie is pretty good', isFavorite : true},
    ];
  });
  it('ADD_MOVIES should return an array of movies', () => {
    const result = movies([], actions.addMovies(mockMovies));
    expect(result).toEqual(mockMovies);
  });

  it('RESET_MOVIES should reset the array of movies to all be favorited false', () => {
    const expected = [
      {id: 123233, title: 'Movie 1', overview:'this movie is great', isFavorite : false},//should be changed to false
      {id: 111111, title: 'Movie 2', overview:'this movie is not great', isFavorite : false},
      {id: 123213, title: 'Movie 3', overview:'this movie is pretty good', isFavorite : false},//should be false
    ];
    const result = movies(mockMovies, actions.resetMovies());
    expect(result).toEqual(expected);
  });

  it('should return the default state', () => {
    const result = movies(mockMovies, {type: 'NOT_DEFINED'});
    expect(result).toEqual(mockMovies);
  });
});