import React, { Component } from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom';
import { updateIsLoggedIn, resetUser } from '../actions';
import { connect } from 'react-redux';

class Header extends Component {
  handleSignout = () => {
    this.props.updateIsLoggedIn(false);
    this.props.resetUser('', false, '');
  };

  render() {
    return (
      <header className='header'>
        <h1>NEWFLIX</h1>
        <NavLink to='/login'>
          <button className='user__button'>Sign In</button>
        </NavLink>
        <NavLink to='/register'>
          <button className='user__button'>Register</button>
        </NavLink>
        <NavLink to='/'>
          <button onClick={this.handleSignout} className='user__button'>
            Sign Out
          </button>
        </NavLink>
        {this.props.user.email !== '' && <h3>{this.props.user.email}</h3>}
      </header>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateIsLoggedIn: boolean => dispatch(updateIsLoggedIn(boolean)),
  resetUser: (email, loggedIn, error) =>
    dispatch(resetUser(email, loggedIn, error))
});

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
