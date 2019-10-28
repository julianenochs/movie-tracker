import * as actions from '../actions/index';
import { favorites } from './favorites';

describe('favorites', () => {
  let mockFavorites;
  beforeEach(() => {
    mockFavorites = [
      {id: 234323, title:'A Movie', overview:'This movie rocks', isFavorite: true},
      {id: 234222, title:'A Movie2', overview:'This movie rocks more', isFavorite: true},
      {id: 234111, title:'A Movie3', overview:'This movie rocks less', isFavorite: true}
    ];
  });

  it('should return state', () => {
    const results = favorites(mockFavorites, {type: 'NONE'});
    expect(results).toEqual(mockFavorites);
  });
});