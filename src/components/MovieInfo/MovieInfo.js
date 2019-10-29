import React from 'react';
import { connect } from 'react-redux';
import './MovieInfo.scss';
import { NavLink } from 'react-router-dom';

export const MovieInfo = props => {
  console.log('props', props);
  const selectMovie = props.selectMovieToDisplay(props.id);
  return (
    <section className='movie-info__card'>
      <h2 className='movie__title'>{props.selectMovie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/original/${props.selectMovie.poster_path}`}
        alt='movie poster'
      />
      <p className='overview__info'>{props.selectMovie.overview}</p>
      <p>Release Date: {props.selectMovie.release_date}</p>
      <p>Popularity Voting Average: {props.selectMovie.vote_average}</p>
      <NavLink to='/' className='movies__button'>
        Back To Movies
      </NavLink>
    </section>
  );
};

const mapStateToProps = state => ({
  selectMovie: state.selectMovie
});

export default connect(
  mapStateToProps,
  null
)(MovieInfo);
