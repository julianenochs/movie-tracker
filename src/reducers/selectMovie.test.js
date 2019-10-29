import * as actions from '../actions/index';
import { selectMovie } from './selectMovie';

describe('selectMovie', () => {
  
  it('should have a case for SELECT_MOVIE', () => {
    const expected = { id: 123243, title: 'Movie', overview: 'Great overview', isFavorite: true };
    const result = selectMovie({}, actions.selectMovie(expected));
    expect(result).toEqual(expected);
  });
});