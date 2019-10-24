import React from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return(
    <header className='header'>
      <h1>NEWFLIX</h1>
      <NavLink to='/login'>
        <button className='user__button'>Sign In</button>
      </NavLink>
      <NavLink to='/register'>
        <button className='user__button'>Register</button>
      </NavLink>
    </header>
  )
}

export default Header;