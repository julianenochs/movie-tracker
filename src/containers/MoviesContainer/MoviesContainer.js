import React from 'react';
import { connect } from 'react-redux';
import MovieCard from '../../components/MovieCard/MovieCard';
import './MovieContainers.scss';

const MoviesContainer = (props) => {
  const movies = props.movies.map((movie, i) => {
    console.log(props.movies.map(movie => movie.id))
    return <MovieCard 
      title={movie.title} 
      poster={movie.poster_path} 
      overview={movie.overview}
      movieID={movie.id}
      key={i}
      />;
    });
  return (
    <section className='movie__container'>
      {movies}
    </section>
  );
};

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps)(MoviesContainer);
