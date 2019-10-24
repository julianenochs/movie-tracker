import React from 'react';
import './MovieCard.scss';
import star from '../../images/star-white.svg';
import starFavorited from '../../images/star-favorited.svg';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const MovieCard = ({ title, poster, overview, isLoggedIn }) => {
  return (
    <section className='movie__card'>
      <div>
        <h1 className='movie__title'>{title}</h1>
        {isLoggedIn && <img src={star} />}
        {!isLoggedIn && (
          <NavLink to='/login'>
            <img src={star} />
          </NavLink>
        )}
      </div>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster}`}
        alt='movie poster'
      />
      <p className='overview'>{overview}</p>
      {/* <img src='https://www.pinclipart.com/picdir/middle/33-337369_heart-shaped-clipart-instagram-heart-sign-icon-transparent.png' 
          className='favorite__logo favorited'
      /> */}
    </section>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
});

export default connect(
  mapStateToProps,
  null
)(MovieCard);

// https://image.tmdb.org/t/p/original/${poster_path}
