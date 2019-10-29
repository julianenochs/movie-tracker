import React from 'react';
import { LoginForm, mapStateToProps, mapDispatchToProps } from './LoginForm';
import { login } from '../../actions';
import { shallow } from 'enzyme';

describe('LoginForm', () => {

  beforeEach(() => {
  });
  it.skip('should match the snapshot with all of the data passed through', () => {

  });

  it.skip('should call handleLogin when the button is clicked', () => {

  });

  describe('mapStateToProps', () => {
    it('should return an object with a user object', () => {
      const mockState = {
        user: {email: 'jujube@email.com', password: 'password'},
        tempUser: {name: 'Juju', email: 'jujube@email.com', password: 'password'}
      }
      const expected = {
        user: { email: 'jujube@email.com', password: 'password' },
        tempUser: { name: 'Juju', email: 'jujube@email.com', password: 'password' }
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it.skip('calls dispatch with a login action when login is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = login('jujube@email.com', 'password');
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.login('jujube@email.com', 'password');

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});