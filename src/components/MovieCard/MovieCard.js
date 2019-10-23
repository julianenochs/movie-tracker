import React from 'react';
import './MovieCard.scss';

const MovieCard = ({ title, poster, overview }) => {

  return (
    <section className='movie__card'>
      <h1>{title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${poster}`} alt='movie poster' />
      <p>
        {overview}
      </p>
    </section>
  );
};

export default MovieCard;

// https://image.tmdb.org/t/p/original/${poster_path}