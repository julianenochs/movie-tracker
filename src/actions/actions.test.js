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
  it('should have a type of ADD_USER', () => {
    const expectedAction = {
      type: 'ADD_USER',
      email,
      password
    }
    const result = actions.addUser({ email, password });
    expect(result).toEqual(expectedAction);
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

  it('should have a type of LOGIN', () => {
    const expectedAction = {
      type: 'LOGIN',
      email,
      password
    }
    const result = actions.login(email, password);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of REGISTER', () => {
    const expectedAction = {
      type: 'REGISTER',
      name,
      email,
      password
    }
    const result = actions.register(name, email, password);
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
});

