import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, getFavorites } from '../../apiCalls';
import {
  updateUserInfo,
  updateIsLoggedIn,
  updateError,
  updateUser,
  resetError,
  updateFavorites,
} from '../../actions/index';
import { Redirect } from 'react-router-dom';
import './LoginForm.scss';
import Bounce from 'react-reveal/Bounce';
import PropTypes from 'prop-types';

export class LoginForm extends Component {
  handleChange = e => {
    const { updateUserInfo, tempUser } = this.props;
    const inputName = e.target.name;

    switch (inputName) {
      case 'email':
        updateUserInfo(tempUser.name, e.target.value, tempUser.password);
        break;
      case 'password':
        updateUserInfo(tempUser.name, tempUser.email, e.target.value);
        break;
      default:
        updateUserInfo(tempUser.name, tempUser.email, tempUser.password);
        break;
    }
  };

  handleLogin = async e => {
    e.preventDefault();
    const { email, password } = this.props.tempUser;
    login(email, password)
      .then(login => {
        this.props.updateUser(this.props.tempUser.email, login.id);
        this.props.updateIsLoggedIn(true);
        this.props.resetError('');
        localStorage.setItem('user', JSON.stringify({email, userId: login.id }));
        this.props.updateUserInfo('', '', '');
        this.props.loadFavorites();
      })
      .catch(err => {
        this.props.updateError(err);
      });
  };

  handleRedirect = () => {
    if (this.props.isLoggedIn) {
      return <Redirect to='/' />;
    }
  };

  render() {
    const { email, password } = this.props.tempUser;
    return (
      <section className='form'>
        {this.handleRedirect()}
        {this.props.error !== '' && (
          <h4 className='error__message'>{this.props.error}</h4>
        )}
        <Bounce>
          <form>
            <input
              name='email'
              type='text'
              value={this.props.tempUser.email}
              placeholder='Your email here'
              onChange={this.handleChange}
              className='login__input'
            />
            <input
              name='password'
              type='password'
              value={this.props.tempUser.password}
              placeholder='Password'
              onChange={this.handleChange}
              className='login__input'
            />
            {email && password && (
              <button onClick={this.handleLogin} className='login__button'>
                Login
              </button>
            )}
            {(!email || !password) && (
              <button disabled className='login__button'>
                Login
              </button>
            )}
          </form>
        </Bounce>
      </section>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  updateUserInfo: (name, email, password) =>
    dispatch(updateUserInfo(name, email, password)),
  updateIsLoggedIn: boolean => dispatch(updateIsLoggedIn(boolean)),
  updateError: errorMessage => dispatch(updateError(errorMessage)),
  updateUser: (email, userId) => dispatch(updateUser(email, userId)),
  resetError: () => dispatch(resetError()),
  updateFavorites: favorites => dispatch(updateFavorites(favorites)),
  updateIsLoggedIn: bool => dispatch( updateIsLoggedIn(bool) ),
});

export const mapStateToProps = state => ({
  user: state.user,
  tempUser: state.tempUser,
  isLoggedIn: state.isLoggedIn,
  error: state.error,
  movies: state.movies
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

LoginForm.propTypes = {
  user: PropTypes.object,
  tempUser: PropTypes.object,
  isLoggedIn: PropTypes.bool,
  error: PropTypes.string,
  movies: PropTypes.array
};
