import * as actions from '../actions/index';
import { error } from './error';

describe('error', () => {
  it('should have UPDATE_ERROR case', () => {
    const expected = 'Error';
    const result = error('', actions.updateError({message: 'Error'}));
    expect(result).toEqual(expected);
  });

  it('should have RESET_ERROR case', () => {
    const result = error('bad error', actions.resetError());
    expect(result).toEqual('');
  });
});