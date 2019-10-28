import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm, mapStateToProps, mapDispatchToProps } from './LoginForm';
import { login } from '../../actions';

describe('LoginForm', () => {
  let wrapper;
  const mockMovies = [
    {
      popularity: 471.315,
      vote_count: 4211,
      video: false,
      poster_path: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
      id: 475557,
      adult: false,
      backdrop_path: '/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg',
      original_language: 'en',
      original_title: 'Joker',
      title: 'Joker',
      vote_average: 8.6,
      overview:
        'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.',
      release_date: '2019-10-04',
      isFavorite: false
    }
  ];
  const mockUpdateUserInfo = jest.fn();
  const mockUpdateIsLoggedIn = jest.fn();
  const mockUpdateError = jest.fn();
  const mockUpdateUser = jest.fn();
  const mockResetError = jest.fn();
  const mockUpdateFavorites = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <LoginForm
        user={'Peerat Test'}
        tempUser={'Peerat Test'}
        isLoggedIn={true}
        error={''}
        movies={mockMovies}
        updateUserInfo={mockUpdateUserInfo}
        updateIsLoggedIn={mockUpdateIsLoggedIn}
        updateError={mockUpdateError}
        updateUser={mockUpdateUser}
        resetError={mockResetError}
        updateFavorites={mockUpdateFavorites}
      />
    );
  });

  it('should match the LoginForm Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleLogin when the button is clicked', () => {});

  describe('mapStateToProps', () => {
    it('should return an object with a user object', () => {
      const mockState = {
        user: { email: 'jujube@email.com', password: 'password' },
        tempUser: {
          name: 'Juju',
          email: 'jujube@email.com',
          password: 'password'
        }
      };
      const expected = {
        user: { email: 'jujube@email.com', password: 'password' },
        tempUser: {
          name: 'Juju',
          email: 'jujube@email.com',
          password: 'password'
        }
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });
});
