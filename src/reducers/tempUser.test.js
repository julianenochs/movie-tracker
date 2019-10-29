import * as actions from '../actions/index';
import { tempUser } from './tempUser';

describe('tempUser', () => {
  it('should have a case UPDATE_USER_INFO', () => {
    const expected = { name: 'brady', email: 'b@b.com', password: 'password' };
    const result = tempUser({name: '', email: '', password: ''}, actions.updateUserInfo('brady', 'b@b.com', 'password'));
    expect(result).toEqual(expected);
  });
});