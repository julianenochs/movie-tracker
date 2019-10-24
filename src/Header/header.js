import React from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom';
import { updateIsLoggedIn } from '../actions';
import { connect } from 'react-redux';

const Header = props => {
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
        <button
          onClick={() => props.updateIsLoggedIn(false)}
          className='user__button'
        >
          Sign Out
        </button>
      </NavLink>
    </header>
  );
};

const mapDispatchToProps = dispatch => ({
  updateIsLoggedIn: boolean => dispatch(updateIsLoggedIn(boolean))
});

export default connect(
  null,
  mapDispatchToProps
)(Header);
