import React, { Component } from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom';
import {
  updateIsLoggedIn,
  updateUser,
  resetMovies,
  updateFavorites,
  displayFavorites
} from '../actions';
import { connect } from 'react-redux';

class Header extends Component {
  handleSignout = () => {
    this.props.updateIsLoggedIn(false);
    this.props.updateUser('');
    this.props.updateFavorites({ favorites: [] });
    this.props.resetMovies();
  };

  render() {
    return (
      <header className='header'>
        <h1>NEWFLIX</h1>
        {!this.props.isLoggedIn && (
          <NavLink to='/login'>
            <button className='user__button'>Sign In</button>
          </NavLink>
        )}
        {!this.props.isLoggedIn && (
          <NavLink to='/register'>
            <button className='user__button'>Register</button>
          </NavLink>
        )}
        {this.props.isLoggedIn && (
          <NavLink to='/'>
            <button onClick={this.handleSignout} className='user__button'>
              Sign Out
            </button>
          </NavLink>
        )}
        {this.props.user.email !== '' && <h3>{this.props.user.email}</h3>}
        {this.props.isLoggedIn && (
          <NavLink to='/favorites'>
            <button className='user__button'>Favorites</button>
          </NavLink>
        )}
      </header>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateIsLoggedIn: boolean => dispatch(updateIsLoggedIn(boolean)),
  updateUser: email => dispatch(updateUser(email)),
  updateFavorites: favorites => dispatch(updateFavorites(favorites)),
  resetMovies: () => dispatch(resetMovies()),
  displayFavorites: favoriteMovies => dispatch(displayFavorites(favoriteMovies))
});

const mapStateToProps = state => ({
  user: state.user,
  isLoggedIn: state.isLoggedIn,
  movies: state.movies
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
