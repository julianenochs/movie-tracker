import React from 'react';
import './MovieCard.scss';
import star from '../../images/star-white.svg';
import starFavorited from '../../images/star-favorited.svg';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const MovieCard = ({ title, poster, overview, movieID, isLoggedIn }) => {
  console.log('id', movieID)
  return (
    <section className='movie__card'>
      <div>
        <h1 className='movie__title'>{title}</h1>
        {isLoggedIn && <img src={star} />}
        {!isLoggedIn && (
          <NavLink to='/login'>
            <img src={star} className='favorite__star'/>
          </NavLink>
        )}
      </div>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster}`}
        alt='movie poster'
      />
      <p className='overview'>{overview}</p>
      <NavLink to ={`/movies/${movieID}`}>
        <div className='view-movie__div'>View Movie</div>
      </NavLink>
    </section>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  id: state.id
});

export default connect(
  mapStateToProps,
  null
)(MovieCard);

// https://image.tmdb.org/t/p/original/${poster_path}
