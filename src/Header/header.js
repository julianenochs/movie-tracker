import React from 'react';
import './header.scss';

const Header = () => {
  return(
    <header className='header'>
      <h1>NEWFLIX</h1>
      <button className='user__button'>Sign In</button>
    </header>
  )
}

export default Header;