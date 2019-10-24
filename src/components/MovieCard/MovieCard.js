import React from 'react';
import './MovieCard.scss';

const MovieCard = ({ title, poster, overview }) => {

  return (
    <section className='movie__card'>
      <h1>{title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${poster}`} alt='movie poster' />
      <p className='overview'>
        {overview}
      </p>
      <img src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX17743925.jpg' 
          className='favorite__logo favorited'
      />
    </section>
  );
};

export default MovieCard;

// https://image.tmdb.org/t/p/original/${poster_path}