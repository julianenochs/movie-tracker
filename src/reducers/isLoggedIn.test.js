import * as actions from '../actions/index';
import { isLoggedIn } from './isLoggedIn';

describe('isLoggedIn', () => {
  it('should return state if type unrecognized', () => {
    const result = isLoggedIn(true, {type: 'NOT_DEFINED'});
    expect(result).toEqual(true);
  });

  it('should update login state', () => {
    const result = isLoggedIn(true, actions.updateIsLoggedIn(false));
    expect(result).toEqual(false);
  });
});